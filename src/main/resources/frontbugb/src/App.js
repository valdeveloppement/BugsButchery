import React from 'react';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import './App.css';
import MapGame from './pages/MapGame';
import Loging from './pages/Loging';
import Sas from './pages/Sas';
import Fu from './pages/Fu'

let socket = new SockJS('http://localhost:8095/game');
let stompClient = Stomp.over(socket);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.waitClick = this.waitClick.bind(this);
    this.playClick = this.playClick.bind(this);
    this.state = {
      login: true,
      sas: false,
      map: false,
      full: false,
      allTerritories: [],
      allFamilies: [],
      playerList: [],
      playerName: '',
      playerAntsBreed: '',
      playerTurn: {},
      gameStatus: {},
      message: "",
      territoryTarget: {},
      playersAlive: [],
    };
  }

  waitClick() {
    this.setState({ sas: true });
    this.setState({ login: false });
  }

  playClick() {
    this.setState({ sas: false });
    this.setState({ map: true });
  }

  handleChangePlayer = (event) => {
    this.setState({ playerName: event.target.value })
  }

  handleChangeBreed = (event) => {
    this.setState({ playerAntsBreed: event.target.value })
  }

  newPlayer = () => {
    if (stompClient) {
      let player = {
        playerName: this.state.playerName,
        playerAntsBreed: this.state.playerAntsBreed
      }
      stompClient.send("/app/newPlayer", {}, JSON.stringify(player))
      this.waitClick()
    }
  }

  fullgame = () => {
    if(this.state.gameStatus.gameSetOn || this.state.gameStatus.gameOn){
      this.setState({full: true})
    }
  }

  newGame = () => {
    if (stompClient) {
      stompClient.send("/app/newGame")
    }
    this.playClick()
  }

  onMessageReceived = (payload) => {
    let game = JSON.parse(payload.body)
    this.setState({ 
      allTerritories: game.allTerritories,
      playerList: game.playersAlive,
      playerTurn: game.playerTurn,
      allFamilies: game.allFamilies,
      message: game.message,
      gameStatus: game.divOn,
      territoryTarget: game.territoryTarget,
      playersAlive: game.playersAlive,
    })   
  }

  onConnected = () => {
    // Subscribe to the Public Topic
    stompClient.subscribe('/bugsbutchery', this.onMessageReceived);
  }

  onError = (error) => {
    'Could not connect to WebSocket server. Please refresh this page to try again!';
  }

  componentDidMount() {
    const connect = () => {
      stompClient.connect({}, this.onConnected, this.onError);
    }
    connect();
    this.fullgame();
  }

  render() {
    const login = this.state.login;
    const sas = this.state.sas;
    const full = this.state.full;

    if (full) {
      return <Fu />
    } else if (login) {
      return <Loging newPlayer={this.newPlayer} changeName={this.handleChangePlayer} changeBreed={this.handleChangeBreed} />;
    } else if (sas) {
      return <Sas newGame={this.newGame} playerList={this.state.playerList} message={this.state.message} />;
    } else {
      return <MapGame playerName={this.state.playerName} playerList={this.state.playerList} currentPlayer={this.state.playerTurn} gameStatus={this.state.gameStatus} message={this.state.message} allTerritories={this.state.allTerritories} allFamilies={this.state.allFamilies} territoryTarget={this.state.territoryTarget}/>;
    }
  }
}


export default App;
