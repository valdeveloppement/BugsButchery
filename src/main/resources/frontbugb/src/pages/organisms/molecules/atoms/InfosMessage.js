import React from 'react';

class InfosMessage extends React.Component{
  constructor(props) {
    super(props) 
        this.state = {

        }
    
}

  render() {
    return (
      <ul className={this.props.className} id="message">
        {this.props.message.map((message, index) => {
          return <li key={index}>{message}</li>                     
        })}
      </ul>
    )
  }
}

export default InfosMessage;




