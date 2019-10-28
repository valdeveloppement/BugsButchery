import React from 'react';


class Territory extends React.Component {
    

    render() {
        return (
            <div onClick={() => { this.props.action() }} className="territory" id={this.props.color}>
                <p>{this.props.value}</p>
                <p>{"Famille : " + this.props.family.familyName}</p>
                <p>{"Propriétaire : " + this.props.player}</p>
                <p>{"Nombre de fourmis sur le territoire : " + this.props.int}</p>
            </div>
        )
    }
}

export default Territory;