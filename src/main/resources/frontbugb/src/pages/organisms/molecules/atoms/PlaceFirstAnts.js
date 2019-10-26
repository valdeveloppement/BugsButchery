import React from 'react';


class PlaceFirstAnt extends React.Component{
  constructor(props) {
    super(props) 
        this.state = {

        }
    
}

  render() {
    return (
      <div>
                
       
        <p> Entrez le territoire que vous souhaitez envahir :</p>
        <p> Une fourmi de votre stock sera automatiquement placée sur ce terrain.</p>
        <input type="text" onChange={this.props.handleChangeTerritory1} value={this.state.territory1}></input>
        <button onClick={this.props.placeFirstAnts}>Envoyer</button>
      </div>
    )
  }
}

export default PlaceFirstAnt;