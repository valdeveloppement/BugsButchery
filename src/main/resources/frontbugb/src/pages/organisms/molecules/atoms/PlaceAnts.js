import React from 'react';


class PlaceAnts extends React.Component{
  render() {
    return (
      <div>
                
        <p> Entrez le nombre de fourmis que vous souhaitez placer : </p>
        <input type="text" onChange={this.props.handleChangeNbAnts} value={this.state.nbAnts}></input>
        <p> Entrez le nom du territoire sur lequel vous souhaitez les placer</p>
        <input type="text" onChange={this.props.handleChangeTerritory1} value={this.state.territory1}></input>
        <button onClick={this.props.placeAnts}></button>
      </div>
    )
  }
}

export default PlaceAnts;