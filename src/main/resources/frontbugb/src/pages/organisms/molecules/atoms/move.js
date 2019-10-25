import React from 'react';


class Move extends React.Component{
    constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {page: false};
  }


  handleLoginClick() {
    this.setState({page: true});
  }

  handleLogoutClick() {
    this.setState({page: false});
  }

  render() {
    const page = this.state.page;
    let button;

    if (page) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div className="center">
        <Greeting page={page} />
        {button}
      </div>
    );
  }
}

function UserGreeting(props) {
  return <Atta />;
}

function GuestGreeting(props) {
  return <Start />;
}

function Greeting(props) {
  const page = props.page;
  if (page) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      suivant
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      retour
    </button>
  );
}

export default Move;