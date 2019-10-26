import React from 'react';


class Attack extends React.Component {
  constructor(props) {
    super(props) 
        this.state = {

        }
    
}


  render() {
    return (
      <div>
        <p>Entrez le territoire attaquant :</p>
        <input type="text" onChange={this.props.handleChangeTerritory1} value={this.state.territory1}></input>
        <p>Entrez le territoire que vous souhaitez attaquer :</p>
        <input type="text" onChange={this.props.handlechangeTerritory2} value={this.state.territory2}></input>
        <p>Entrez le nombre de fourmis avec lesquelles vous souhaitez attaquer :</p>
        <input type="text" onChange={this.props.handleChangeNbrDiceAttack} value={this.state.nbrDiceAttack}></input>
        <button onClick={this.props.requestAttack}>Envoyer</button>
        <button onClick={this.props.skip}>Non merci</button>
      </div>
    )
  }
}
  
    

export default Attack;