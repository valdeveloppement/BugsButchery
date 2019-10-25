import React from 'react';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import './App.css';
import MapGame from './pages/MapGame';
import Loging from './pages/Loging';
import Sas from './pages/Sas';

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
      game: {},
      allTerritories: [],
      playerName: '',
      playerAntsBreed: '',
    };
  }

  waitClick() {
    this.setState({ sas: true });
    this.setState({ login: false });
  }

  playClick() {
    this.setState({ sas: true });
    this.setState({ login: false });
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
    }
  }

  onMessageReceived = (payload) => {
    this.setState({ game: JSON.parse(payload.body) })
    this.setState({ allTerritories: this.state.game.allTerritories })

  }


  handleChangePlayer = (event) => {
    this.setState({ playerName: event.target.value })
  }

  handleChangeBreed = (event) => {
    this.setState({ playerAntsBreed: event.target.value })
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
  }

  render() {
    const login = this.state.login;
    const sas = this.state.sas;
    let button;

    if (login) {
      button = <LoginButton onClick={this.waitClick} />;
      return <Loging newPlayer={this.newPlayer} changeName={this.handleChangePlayer} changeBreed={this.handleChangeBreed}/>;
    } else if (sas) {
      button = <PlayButton onClick={this.playClick} />;
      return <Sas />;
    } else {
      return <MapGame />;
    }

    /* return (
       <div>
         <View login={login} />
         {button}
       </div>
     );*/

  }



}
/*

function View(props) {
  const login = this.state.login;
  const sas = this.state.sas;

  if (login) {
    button = <LoginButton onClick={this.waitClick} />;
    return <Loging />;
  } else if (sas) {
    button = <PlayButton onClick={this.playClick} />;
    return <Sas />;
  } else {
    return <MapGame />;
  }
}
*/
function LoginButton(props) {
  return <button onClick={props.onClick}>suivant</button>;
}


function PlayButton(props) {
  return <button onClick={props.onClick}>play</button>;
}

export default App;
