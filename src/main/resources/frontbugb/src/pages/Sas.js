import React from 'react';

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
            <div className="attente">
                <button onClick={this.props.newGame}>newgame</button>
                {this.props.playerList.map((i, index) => {
                    return <p key={index}>{i.playerName}</p>
                })}
            </div>

        );
    }
}

export default Sas;
