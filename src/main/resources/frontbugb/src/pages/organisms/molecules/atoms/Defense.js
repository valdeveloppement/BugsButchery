import React from 'react';


class Defense extends React.Component {

  render() {
    return (
      <div>
        
        <p>Entrez le nombre de fourmis avec lesquelles vous souhaitez vous défendre :</p>
        <input type="text" onChange={this.props.handleChangeNbDicesDefense} value={this.state.changeNbDicesDefense}></input>
        <button onClick={this.props.defense}></button>
      </div>
    )
  }
}
  
    

export default Defense;