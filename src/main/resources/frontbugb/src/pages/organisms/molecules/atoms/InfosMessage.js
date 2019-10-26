import React from 'react';

class InfosMessage extends React.Component{
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




