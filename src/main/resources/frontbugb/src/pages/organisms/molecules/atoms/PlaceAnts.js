import React from 'react';


class PlaceAnts extends React.Component{
  constructor(props) {
    super(props) 
        this.state = {

        }
    
}

  render() {
    if(this.props.rendering && this.props.identity === this.props.playerTurn) {
      return (
        <div>  
          <p> Entrez le nombre de fourmis que vous souhaitez placer : </p>
          <input type="text" onChange={this.props.changeNbAnts} value={this.state.nbAnts}></input>
          <p> Entrez le nom du territoire sur lequel vous souhaitez les placer</p>
          <input type="text" onChange={this.props.changeTerritory1} value={this.state.territory1}></input>
          <button onClick={this.props.placeAnts}>Envoyer</button>
        </div>
      )
    }
    else {
      return <div></div>
    }
  }
}

export default PlaceAnts;