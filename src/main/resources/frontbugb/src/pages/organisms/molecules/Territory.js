import React from "react";

class Territory extends React.Component {

    render() {

        return (
            <div className="territory" id={this.props.color}>
<p className="textMap">
                    {this.props.value}{' '}
                    {'(' + this.props.family.familyName + ')'}
                </p>
                <p className="proprio">{this.props.player}</p>
                <p className="nbFourmis">{this.props.int} {this.props.int > 1 ? 'fourmis' : 'fourmi'}</p>
               
            </div>
        )
    }

}

export default Territory;
