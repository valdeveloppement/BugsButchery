import React from 'react';

class InfosPlayer extends React.Component{
  render() {
    return (
<div> 
    {this.props.playerList.map((i, index) => {
      return <p key={index}>{i.playerName}</p>
    })}
</div>
    )
  }
}

export default InfosPlayer;