import React from 'react';


class Attack extends React.Component {

  render() {
    return (
      <div>
        <p>Entrez le territoire attaquant :</p>
        <input type="text" onChange={this.props.handleChangeTerritory1} value={this.state.Territory1}></input>
        <p>Entrez le territoire que vous souhaitez attaquer :</p>
        <input type="text" onChange={this.props.handlechangeTerritory2} value={this.state.Territory2}></input>
        <p>Entrez le nombre de fourmis avec lesquelles vous souhaitez attaquer :</p>
        <input type="text" onChange={this.props.handleChangeNbDicesAttack} value={this.state.changeNbDicesAttack}></input>
        <button onClick={this.props.attack}></button>
      </div>
    )
  }
}
  
    

export default Attack;