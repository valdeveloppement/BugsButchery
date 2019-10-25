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

    render() {
        const isAttack = this.state.isAttack;
        let button;

        if (isAttack) {
            button = <Button value="send" />;
        }

        return (
            <div className="contenant">
                <div className="carte">
                    <Territory
                        action={this.alert}
                        color="epinards"
                        value="épinards"
                        int=""
                        player=""
                        family="légume"
                    />
                    <Territory
                        action={this.alert}
                        color="framboise"
                        value="framboise"
                        int=""
                        player=""
                        family="fruit"
                    />
                    <Territory
                        action={this.alert}
                        color="kiwi"
                        value="kiwi"
                        int=""
                        player=""
                        family="fruit"
                    />
                    <Territory
                        action={this.alert}
                        color="foie_gras"
                        value="foie gras"
                        int=""
                        player=""
                        family="viande"
                    />
                    <Territory
                        action={this.alert}
                        color="aubergine"
                        value="aubergine"
                        int=""
                        player=""
                        family="légumes"
                    />
                    <Territory
                        action={this.alert}
                        color="jambon"
                        value="jambon"
                        int=""
                        player=""
                        family="viande"
                    />
                    <Territory
                        action={this.alert}
                        color="poivron"
                        value="poivron"
                        int=""
                        player=""
                        family="légume"
                    />
                    <Territory
                        action={this.alert}
                        color="saucisse"
                        value="saucisse"
                        int=""
                        player=""
                        family="viande"
                    />
                    <Territory
                        action={this.alert}
                        color="abricot"
                        value="abricot"
                        int=""
                        player=""
                        family="fruit"
                    />
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
