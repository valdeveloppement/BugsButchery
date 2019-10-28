import React from 'react';


class Attack extends React.Component {
  constructor(props) {
    super(props) 
        this.state = {

        }
    
}


  render() {
    if(this.props.rendering && this.props.identity === this.props.playerTurn) {
      return (
        <div>
          <p>Entrez le territoire attaquant :</p>
          <input type="text" onChange={this.props.changeTerritory1} value={this.state.territory1}></input>
          <p>Entrez le territoire que vous souhaitez attaquer :</p>
          <input type="text" onChange={this.props.changeTerritory2} value={this.state.territory2}></input>
          <p>Entrez le nombre de fourmis avec lesquelles vous souhaitez attaquer :</p>
          <input type="number" onChange={this.props.changeNbrDiceAttack} value={this.state.nbrDiceAttack} min="0"></input>
          <button onClick={this.props.requestAttack}>Envoyer</button>
          <button onClick={this.props.skip}>Non merci</button>
        </div>
      )
    }
    else {
      return <div></div>
    }
  }
}

export default Attack;