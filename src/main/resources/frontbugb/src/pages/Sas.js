import React from 'react';
import InfosMessage from './organisms/molecules/atoms/InfosMessage';

class Sas extends React.Component {

    render() {
        return (
            <div className="contenant">
                <button onClick={this.props.newGame}>newgame</button>
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

export default Sas;
