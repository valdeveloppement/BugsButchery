import React from 'react';


class PlaceFirstAnt extends React.Component{
  render() {
    return (
      <div>
                
       
        <p> Entrez le territoire que vous souhaitez envahir :</p>
        <p> Une fourmi de votre stock sera automatiquement placée sur ce terrain.</p>
        <input type="text" onChange={this.props.handleChangeTerritory1} value={this.state.territory1}></input>
        <button onClick={this.props.placeFirstAnts}></button>
      </div>
    )
  }
}

export default PlaceFirstAnt;