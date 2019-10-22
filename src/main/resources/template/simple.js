'use strict';
 
 
var stompClient = null;
var username = null;
  
 
function connect() {
      
    var socket = new SockJS('http://localhost:8095/game');
    stompClient = Stomp.over(socket);
 
    stompClient.connect({}, onConnected, onError);
}
 
// Connect to WebSocket Server.
connect();
 
function onConnected() {
    // Subscribe to the Public Topic
    stompClient.subscribe('/bugsbutchery', onMessageReceived);
}
 
 
function onError(error) {
    $('#content').val('Could not connect to WebSocket server. Please refresh this page to try again!');
}
 
 
function sendMessage() {
    var username = $('#name').val().trim();
    var antBreed = $('#breed').val().trim()
    if(stompClient) {
        var player = {
            playerName: username,
            playerAntsBreed: antBreed,
        };
        stompClient.send("/app/newPlayer", {}, JSON.stringify(player));
        $('#name').val('');
        $('#breed').val('');
    }
}
 
function onMessageReceived(payload) {
    let player = JSON.parse(payload.body)
    $('#content').append(player.playerName);
}