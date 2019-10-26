import React from 'react';

class InfosMessage extends React.Component{
  constructor(props) {
    super(props) 
        this.state = {

        }
    
}


  render() {
    return (
<div className={this.props.className}> 


  {this.props.message.map((message, index) => {
    return ( <p key={index}>{message}</p> 
                            
    )
  })}


</div>
    )
  }
}

export default InfosMessage;




