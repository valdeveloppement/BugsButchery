import React from 'react';

class InfosPlayer extends React.Component{

  constructor(props) {
    super(props) 
        this.state = {

        }
    
}

  render() {
    return (
<div className={this.props.className}> 
    {this.props.playerList.map((i, index) => {
      return <p key={index}>{i.playerName}</p>
    })}
</div>
    )
  }
}

export default InfosPlayer;