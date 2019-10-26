import React from 'react';

class InfosMessage extends React.Component{
  render() {
    return (
<div className={this.props.className}> 
  <p>{this.props.message}</p>
</div>
    )
  }
}

export default InfosMessage;