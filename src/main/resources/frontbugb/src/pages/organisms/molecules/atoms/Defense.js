import React from 'react';


class Defense extends React.Component {
  constructor(props) {
    super(props) 
        this.state = {

        }
    
}


  render() {
    return (
      <div>
        
        <p>Entrez le nombre de fourmis avec lesquelles vous souhaitez vous défendre :</p>
        <input type="text" onChange={this.props.handleChangeNbrDiceDefense} value={this.state.nbrDiceDefense}></input>
        <button onClick={this.props.requestDefense}></button>
      </div>
    )
  }
}
  
    

export default Defense;