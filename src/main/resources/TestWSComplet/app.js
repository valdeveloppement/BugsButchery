var stompClient = null;

function setConnected(connected) {
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);
    if (connected) {
        $("#conversation").show();
    }
    else {
        $("#conversation").hide();
    }
    $("#greetings").html("");
}



function connect() {
    var socket = new SockJS('http://localhost:8095/game');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        setConnected(true);
        console.log('Connected: ' + frame);
        stompClient.subscribe('/bugsbutchery', function (greeting) {
            showGreeting(JSON.parse(greeting.body));
        });
    });
}

function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}

function sendName() {
    stompClient.send("/app/newPlayer", {}, JSON.stringify({'playerName': $("#name").val()}));
}

function showGreeting(message) {
    console.log("it works");
    $("#greetings").append("<tr><td>" + message.playerName + "</td></tr>");
}

/*function onMessageReceived(bloublou) {
    var message = JSON.parse(bloublou).playerName
    $("#greetings").append("<tr><td>" + message + "</td></tr>");
}
*/
$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    $( "#connect" ).click(function() { connect(); });
    $( "#disconnect" ).click(function() { disconnect(); });
    $( "#send" ).click(function() { sendName(); });
});

