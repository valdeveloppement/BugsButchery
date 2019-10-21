import React from 'react';


class Input extends React.Component{

  render() {
    return (
    <div>
       <input type="text">{this.props.value}</input>
    </div>
        )
    } 
}

export default Input;