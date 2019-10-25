import React from 'react';


class Attack extends React.Component{
    constructor(props) {
        super(props);
        this.buttonGoAttack = this.buttonGoAttack.bind(this);
        this.buttonSendInfoAttack = this.buttonSendInfoAttack.bind(this);
        this.state = {pageAttack: false};
      }
    
    
      buttonGoAttack() {
        this.setState({pageAttack: true});
      }
    
      buttonSendInfoAttack() {
        this.setState({pageAttack: false});
      }
    
      render() {
        const pageAttack = this.state.pageAttack;
        let button;
    
        if (pageAttack) {
          button = <LogoutButton onClick={this.buttonSendInfoAttack} />;
        } else {
          button = <LoginButton onClick={this.buttonGoAttack} />;
        }
    
        return (
          <div className="center">
            <Greeting pageAttack={pageAttack} />
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
      const pageAttack = props.pageAttack;
      if (pageAttack) {
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

export default Attack;