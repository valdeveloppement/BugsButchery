import React from 'react';


class Move extends React.Component{
  render() {
    return (
      <div>
        
        <p>Entrez le nom du territoire auquel vous voulez enlever des fourmis : </p>
        <input type="text" onChange={this.props.handleChangeTerritory1} value={this.state.changeTerritory1}></input>
        <p>Entrez le nom du territoire sur lequel vous voulez placer ces fourmis : </p>
        <input type="text" onChange={this.props.handleChangeTerritory2} value={this.state.changeTerritory2}></input>
        <p>Entrez le nombre de fourmis que vous voulez déplacer : </p>
        <input type="text" onChange={this.props.handleChangeNnbAntsMoving} value={this.state.nbAntsMoving}></input>
        <button onClick={this.props.move}></button>
      </div>
    )
  }
}

export default Move;