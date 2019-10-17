import React from 'react';

class Infos extends React.Component{
  render() {
    return (
<div> 
    <div className="infos" id={this.props.value}>{this.props.info}</div>
</div>
    )
  }
}

export default Infos;