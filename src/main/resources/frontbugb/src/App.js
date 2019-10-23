import React from 'react';
import Stomp from 'stompjs'
import SockJS from 'sockjs-client'
import './App.css';
import Button from './Button.js';
import Territory from './Territory.js';
import Infos from './Infos.js';

let stompClient = null;

const connect = () => {
  let socket = new SockJS('http://localhost:8095/game');
  stompClient = Stomp.over(socket);
  stompClient.connect({}, onConnected, onError);
}

const onMessageReceived = (payload) => {
  let player = JSON.parse(payload.body)
}

const onConnected = () => {
  // Subscribe to the Public Topic
  stompClient.subscribe('/bugsbutchery', onMessageReceived);
}

const onError = (error) => {
 'Could not connect to WebSocket server. Please refresh this page to try again!';
}



class App extends React.Component{
constructor(props) {
  super(props);

  this.state = {
    isAttack: false,
    isMove: false,
    stompClient: null
  }
}


alert = () => {
  alert(`${this.value}`)
  }

attack = () => {
this.setState({isAttack: true});
alert(`${this.value}`)
}

move = () => {
this.setState({isMove: true});
alert(`${this.value}` )
}

suivant = () => {
alert(`${this.value}`)
}

submit = (value) => {

}

componentDidMount() {
  connect();
}
  render() {
    const isAttack = this.state.isAttack;
    let button;

  if (isAttack) {
      button = <Button value="send" />
    } 

    return (
      <div className="contenant">
        <input type="text" id="name"></input>
        <button type="submit" onClick={}></button>
        <div className="carte">
          <Territory action={this.alert} color="epinards" value="épinards" int="" player="" family="légume"/>
          <Territory action={this.alert} color="framboise" value="framboise" int="" player="" family="fruit"/>
          <Territory action={this.alert} color="kiwi" value="kiwi" int="" player="" family="fruit"/>
          <Territory action={this.alert} color="foie_gras" value="foie gras" int="" player="" family="viande"/>
          <Territory action={this.alert} color="aubergine" value="aubergine" int="" player="" family="légumes"/>
          <Territory action={this.alert} color="jambon" value="jambon" int="" player="" family="viande"/>
          <Territory action={this.alert} color="poivron" value="poivron" int="" player="" family="légume"/>
          <Territory action={this.alert} color="saucisse" value="saucisse" int="" player="" family="viande"/>
          <Territory action={this.alert} color="abricot" value="abricot" int="" player="" family="fruit"/>
        </div>
        <div className="informationJeu">
          <Infos value="players" info="tous les players"/>
          <Infos value="info" info="infos générales"/>
        </div>
        <div>
          <Button action={this.attack} value="attack" />
          <Button action={this.move} value="move"/>
          <Button action={this.suivant} value="Suivant" />
          {button}
        </div>
        
      </div>
          )
        }
      }
      export default App