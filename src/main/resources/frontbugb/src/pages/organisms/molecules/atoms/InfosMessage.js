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


  {this.props.message.map((message) => {
    return ( <p>{message}</p> 
                            
    )
  })}


</div>
    )
  }
}

export default InfosMessage;




