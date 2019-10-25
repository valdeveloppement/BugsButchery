import React from 'react';
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

function LoginButton(props) {
    return <button onClick={props.onClick}>suivant</button>;
}

function PlayButton(props) {
    return <button onClick={props.onClick}>play</button>;
}

export default App;
