import React from 'react';
import InfosMessage from './organisms/molecules/atoms/InfosMessage';

class Sas extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }

    render() {
        if(!this.props.currentPlayer) {
            return <p>Loading...</p>
        }
        else if(this.props.currentPlayer.playerName === this.props.playerName) {
            return (
                <div className="contenant">
                    <button onClick={this.props.newGame}>New Game</button>
                    <div className="infos">
                        {this.props.playerList.map((i, index) => {
                            return <p key={index}>{i.playerName}</p>
                        })}
                    </div>
    
                    <div>
                        <InfosMessage className="infos" message={this.props.message} />
                    </div>
                </div>
            );
        }
        else if (this.props.gameStatus.gameOn || this.props.gameStatus.gameSetOn) {
            return (
                <div className="contenant">
                    <button onClick={this.props.joinGame}>Join Game</button>
                    <div className="infos">
                        {this.props.playerList.map((i, index) => {
                            return <p key={index}>{i.playerName}</p>
                        })}
                    </div>
    
                    <div>
                        <InfosMessage className="infos" message={this.props.message} />
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="contenant">
                    <div className="infos">
                        {this.props.playerList.map((i, index) => {
                            return <p key={index}>{i.playerName}</p>
                        })}
                    </div>
    
                    <div>
                        <InfosMessage className="infos" message={this.props.message} />
                    </div>
                </div>
            );
        }
    }
}

export default Sas;
