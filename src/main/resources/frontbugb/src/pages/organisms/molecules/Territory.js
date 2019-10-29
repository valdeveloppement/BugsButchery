import React from 'react';


class Territory extends React.Component {
    

    render() {
        return (
            <div className="territory" id={this.props.color}>
                {this.props.value + " Famille : " + this.props.family.familyName + ", Propriétaire : " + this.props.player + ", Nombre de fourmis sur le territoire : " + this.props.int}
            </div>
        )
    }
}

export default Territory;