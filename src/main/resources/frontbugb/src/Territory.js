import React from 'react';


class Territory extends React.Component{
  render() {
    return (
    <div onClick={() => {this.props.action()}} className="territory" id={this.props.color}>
        {this.props.value +" "+ this.props.int +" "+ this.props.player +" "+ this.props.family[0].familyName}
    </div>
        )
    } 
}

export default Territory;