import React from 'react';

class InfosMessage extends React.Component{
  render() {
    return (
<div> 
  <p>{this.props.message}</p>
</div>
    )
  }
}

export default InfosMessage;