import React from 'react';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';

let socket = new SockJS('http://localhost:8095/game');
let stompClient = Stomp.over(socket);

class Loging extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAttack: false,
            isMove: false,
        };
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

    render() {
        return (
            <div className="login">
                <input type="text" onChange={this.handleChangePlayer} value={this.state.playerName}></input>
                <input type="text" onChange={this.handleChangeBreed} value={this.state.playerAntsBreed}></input>
                <button onClick={this.newPlayer}>newPlayer</button>
            </div>
        )
    }
}

export default Loging;
