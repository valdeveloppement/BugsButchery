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

    button = null;


    render() {
       

        
     /*   
if(this.props.gameStatus.gameSetOn){
button =  <button onClick={this.props.pickTerritory}>Choisir un </button>
} */
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
                            family={this.props.allFamilies.filter(j => j.familyId === i.territoryFamily)}
                         /> )
                    })}
                


                    
                </div>

                <div className="informationJeu">
                    <InfosPlayer className="infos" playerList={this.props.playerList} />
                </div>
                <div>
                    <InfosMessage className="infos" message={this.props.message} />
                </div>
            </div>
        );
    }
}

export default MapGame;
