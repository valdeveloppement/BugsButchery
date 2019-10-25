
import React from 'react';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import './App.css';
import Button from './Button.js';
import Territory from './Territory.js';
import Infos from './Infos.js';

let socket = new SockJS('http://localhost:8095/game');
let stompClient = Stomp.over(socket);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAttack: false,
      isMove: false,
      isGameInit: false,
      isPlayerInit: false,
      game: {},
      allTerritories: [],
      playerName: '',
      playerAntsBreed: '',
    }
  }


  alert = () => {
    alert(`${this.value}`)
  }

  attack = () => {
    this.setState({ isAttack: true });
    alert(`${this.value}`)
  }

  move = () => {
    this.setState({ isMove: true });
    alert(`${this.value}`)
  }

  suivant = () => {
    alert(`${this.value}`)
  }

  submit = (value) => {

<<<<<<< HEAD
onMessageReceived = (payload) => {
  this.setState({game: JSON.parse(payload.body)})
}

newGame = ()=> {
  if(stompClient) {
      stompClient.send("/app/newGame")
  }
}
componentDidMount() {
  const connect = () => {
    stompClient.connect({}, onConnected, onError);
=======
>>>>>>> 534948534b0238b66553f9fbf762ac4cccd5b3be
  }

  onMessageReceived = (payload) => {
    this.setState({ game: JSON.parse(payload.body) })
    this.setState({ allTerritories: this.state.game.allTerritories })
  }
  onConnected = () => {
    // Subscribe to the Public Topic
    stompClient.subscribe('/bugsbutchery', this.onMessageReceived);
  }

  onError = (error) => {
    'Could not connect to WebSocket server. Please refresh this page to try again!';
  }
  newGame = () => {
    if (stompClient) {
      stompClient.send("/app/newGame")
    }
    this.setState({ isGameInit: true })
  }
  newPlayer = () => {
    if (stompClient) {
      let player = {
        playerName: this.state.playerName,
        playerAntsBreed: this.state.playerAntsBreed
      }
      stompClient.send("/app/newPlayer", {}, JSON.stringify(player))
    }
  }
  handleChangePlayer = (event) => {
    this.setState({ playerName: event.target.value })
  }
  handleChangeBreed = (event) => {
    this.setState({ playerAntsBreed: event.target.value })
  }
  componentDidMount() {
    const connect = () => {
      stompClient.connect({}, this.onConnected, this.onError);
    }
    connect();
  }
  render() {
    const isAttack = this.state.isAttack;
    let button;

    if (isAttack) {
      button = <Button value="send" />
<<<<<<< HEAD
    } 

    return (
      <div className="contenant">
        <div className="carte">
        <button onClick={this.newGame}>newgame</button>
        <input value="newplayer"></input>
        <button onClick={this.newPlayer}>newPlayer</button>
          <Territory action={this.alert} color="epinards" value="épinards" int="" player="" family="légume"/>
          <Territory action={this.alert} color="framboise" value="framboise" int="" player="" family="fruit"/>
          <Territory action={this.alert} color="kiwi" value="kiwi" int="" player="" family="fruit"/>
          <Territory action={this.alert} color="foie_gras" value="foie gras" int="" player="" family="viande"/>
          <Territory action={this.alert} color="aubergine" value="aubergine" int="" player="" family="légumes"/>
          <Territory action={this.alert} color="jambon" value="jambon" int="" player="" family="viande"/>
          <Territory action={this.alert} color="poivron" value="poivron" int="" player="" family="légume"/>
          <Territory action={this.alert} color="saucisse" value="saucisse" int="" player="" family="viande"/>
          <Territory action={this.alert} color="abricot" value="abricot" int="" player="" family="fruit"/>
=======
    }
    if (this.state.isPlayerInit) {
      return (
        <div className="attente">
          <button onClick={this.newGame}>newgame</button>
>>>>>>> 534948534b0238b66553f9fbf762ac4cccd5b3be
        </div>
      )
    }
    else if (this.state.isGameInit) {
      return (
        <div className="contenant">
          <div className="carte">
            <Territory action={this.alert} info={this.state.allTerritories[5]} />
            <Territory action={this.alert} info={this.state.allTerritories[2]} />
            <Territory action={this.alert} info={this.state.allTerritories[0]} />
            <Territory action={this.alert} info={this.state.allTerritories[7]} />
            <Territory action={this.alert} info={this.state.allTerritories[4]} />
            <Territory action={this.alert} info={this.state.allTerritories[6]} />
            <Territory action={this.alert} info={this.state.allTerritories[3]} />
            <Territory action={this.alert} info={this.state.allTerritories[8]} />
            <Territory action={this.alert} info={this.state.allTerritories[1]} />
          </div>
          <div className="informationJeu">
            <Infos value="players" info="tous les players" />
            <Infos value="info" info="infos générales" />
          </div>
          <div>
            <Button action={this.attack} value="attack" />
            <Button action={this.move} value="move" />
            <Button action={this.suivant} value="Suivant" />
            {button}
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="login">
          <input type="text" onChange={this.handleChangePlayer} value={this.state.playerName}></input>
          <input type="text" onChange={this.handleChangeBreed} value={this.state.playerAntsBreed}></input>
          <button onClick={this.newPlayer}>newPlayer</button>
        </div>

      )
    }
  }
}
export default App

