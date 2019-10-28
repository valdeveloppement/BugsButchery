import React from 'react';


class Defense extends React.Component {
  constructor(props) {
    super(props) 
        this.state = {

        }
    
}


  render() {
    if(this.props.rendering && this.props.identity === this.props.defender.playerName) {
      return (
        <div>
          <p>Entrez le nombre de fourmis avec lesquelles vous souhaitez vous défendre :</p>
          <input type="number" onChange={this.props.changeNbrDiceDefense} value={this.state.nbrDiceDefense}></input>
          <button onClick={this.props.requestDefense}>Envoyer</button>
        </div>
      )
    }
    else {
      return <div></div>
    }
  }
}
  
    

export default Defense;