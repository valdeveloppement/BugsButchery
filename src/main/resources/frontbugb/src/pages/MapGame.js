import React from 'react';
import Button from './organisms/molecules/atoms/Button.js';
import Territory from './organisms/molecules/Territory.js';
import InfosPlayer from './organisms/molecules/atoms/Infos.js';
import InfosMessage from './organisms/molecules/atoms/InfosMessage.js'

class MapGame extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAttack: false,
            isMove: false,
        };
    }

    alert = () => {
        alert(`${this.value}`);
    }

    attack = () => {
        this.setState({ isAttack: true });
        alert(`${this.value}`);
    }

    move = () => {
        this.setState({ isMove: true });
        alert(`${this.value}`);
    }

    suivant = () => {
        alert(`${this.value}`);
    }

    componentDidUpdate(prevprops) {
        console.log(prevprops)
    }
    render() {
        const isAttack = this.state.isAttack;
        let button;

        if (isAttack) {
            button = <Button value="send" />;
        }

        return (
            <div className="contenant">
                <div className="carte">
                    {this.props.allTerritories.map((i, index) => {
                         return ( <Territory 
                            key={index}
                            action={this.alert}
                            color={i.territoryName}
                            value={i.territoryName}
                            int={i.territoryAntsNb}
                            player={i.territoryOwner ? i.territoryOwner : "libre"}
                         /> )
                    })}
                


                    
                </div>

                <div className="informationJeu">
                    <InfosPlayer className="infos" playerList={this.props.playerList} />
                </div>
                <div>
                    <InfosMessage className="infos" message={this.props.message} />
                </div>
                <div>
                    <Button action={this.attack} value="attack" />
                    <Button action={this.move} value="move" />
                    <Button action={this.suivant} value="Suivant" />
                    {button}
                </div>
            </div>
        );
    }
}

export default MapGame;
