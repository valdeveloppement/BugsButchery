import React from 'react';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';

let socket = new SockJS('http://localhost:8095/game');
let stompClient = Stomp.over(socket);

class Sas extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAttack: false,
            isMove: false,
        };
    }

    newGame = () => {
        if (stompClient) {
            stompClient.send("/app/newGame")
        }
        this.setState({ isGameInit: true })
    }

    render() {
        return (
            <div className="attente">
                <button onClick={this.newGame}>newgame</button>
            </div>

        );
    }
}

export default Sas;
