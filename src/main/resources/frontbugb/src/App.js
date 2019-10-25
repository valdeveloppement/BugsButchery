import React from 'react';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import './App.css';
import MapGame from './pages/MapGame';
import Loging from './pages/Loging';
import Sas from './pages/Sas';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.waitClick = this.waitClick.bind(this);
        this.playClick = this.playClick.bind(this);
        this.state = {
            login: true,
            sas: false,
            map: false,
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

    render() {
        const login = this.state.login;
        const sas = this.state.sas;
        let button;

        if (login) {
            button = <LoginButton onClick={this.waitClick} />;
        } else if (sas) {
            button = <PlayButton onClick={this.playClick} />;
        }

<<<<<<< HEAD
 /* submit = (value) => {
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
    } 

    if (this.state.isPlayerInit) {
      return (
        <div className="attente">
          <button onClick={this.newGame}>newgame</button>
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
        </div>*/

        return (

           if (login) {
            return <Loging />;
        } else if (sas) {
            return <Sas />;
        } else {
            return <MapGame />;
        }
    }
}

function View(props) {
    const login = this.state.login;
    const sas = this.state.sas;

    if (login) {
        return <Loging />;
    } else if (sas) {
        return <Sas />;
    } else {
        return <MapGame />;
    }
}

/*function LoginButton(props) {
    return <button onClick={props.onClick}>suivant</button>;
}*/


function PlayButton(props) {
    return <button onClick={props.onClick}>play</button>;
}

export default App;
