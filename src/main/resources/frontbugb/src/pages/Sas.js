import React from 'react';
import InfosMessage from './organisms/molecules/atoms/InfosMessage';

class Sas extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAttack: false,
            isMove: false,
        };
    }

    render() {
        return (
            <div className="contenant">
            <div className="attente">
                <button onClick={this.props.newGame}>newgame</button>
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
