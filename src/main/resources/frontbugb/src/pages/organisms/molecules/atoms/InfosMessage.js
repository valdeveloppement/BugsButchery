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
  <p>{this.props.message}</p>
</div>
    )
  }
}

export default InfosMessage;