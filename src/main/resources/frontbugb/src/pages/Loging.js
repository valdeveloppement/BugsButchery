import React from 'react';

class Loging extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div className="login">
                <input type="text" onChange={this.props.changeName} value={this.state.playerName}></input>
                <input type="text" onChange={this.props.changeBreed} value={this.state.playerAntsBreed}></input>
                <button onClick={this.props.newPlayer}>newPlayer</button>
            </div>
        )
    }
}

export default Loging;
