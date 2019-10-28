import React from 'react';
import Territory from './organisms/molecules/Territory.js';
import InfosPlayer from './organisms/molecules/atoms/Infos.js';
import InfosMessage from './organisms/molecules/atoms/InfosMessage.js';
import Attack from './organisms/molecules/atoms/Attack.js';
import Defense from './organisms/molecules/atoms/Defense.js';
import Move from './organisms/molecules/atoms/Move.js';
import Anthill from './organisms/molecules/atoms/Anthill.js';
import PlaceAnts from './organisms/molecules/atoms/PlaceAnts.js';
import PlaceFirstAnts from './organisms/molecules/atoms/PlaceFirstAnts.js';


class MapGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            territory1:"",
        };
    }

    render() {
        return (
            <div className="contenant">
                <div className="carte">
                    {this.props.allTerritories.map((i, index) => {
                        return (<Territory
                            key={index}
                            color={i.territoryName}
                            value={i.territoryName}
                            int={i.territoryAntsNb}
                            player={i.territoryOwner ? i.territoryOwner.playerName : "libre"}
                            family={this.props.allFamilies.find(elem => elem.familyId === i.territoryFamily)}
                        />)
                    })}

                </div>

                <div className="informationJeu">
                    <InfosPlayer className="infos" playerList={this.props.playerList} />
                </div>
                <div>
                    <InfosMessage className="infos" message={this.props.message} />
                </div>

                <div className="playingGround">
                    <Attack changeTerritory1={this.props.changeTerritory1} changeTerritory2={this.props.changeTerritory2} changeNbrDiceAttack={this.props.changeNbrDiceAttack} skip={this.props.skip} requestAttack={this.props.requestAttack} rendering={this.props.gameStatus.attackOn} identity={this.props.playerName} playerTurn={this.props.currentPlayer.playerName} />
                    {this.props.territoryTarget ? <Defense changeNbrDiceDefense={this.props.changeNbrDiceDefense} requestDefense={this.props.requestDefense} rendering={this.props.gameStatus.defenseOn} identity={this.props.playerName} playerTurn={this.props.currentPlayer.playerName} defender={this.props.territoryTarget.territoryOwner}/> : <Defense changeNbrDiceDefense={this.props.changeNbrDiceDefense} requestDefense={this.props.requestDefense} rendering={this.props.gameStatus.defenseOn} identity={this.props.playerName} playerTurn={this.props.currentPlayer.playerName} />}
                    <Move changeTerritory1={this.props.changeTerritory1} changeTerritory2={this.props.changeTerritory2} changeNnbAnts={this.props.changeNnbAnts} skip={this.props.skip} moveAvailable={this.props.moveAvailable} rendering={this.props.gameStatus.moveOn} identity={this.props.playerName} playerTurn={this.props.currentPlayer.playerName}/>
                    <Anthill changeTerritory1={this.props.changeTerritory1} addAnthill={this.props.addAnthill} rendering={this.props.gameStatus.placeAnthillOn} available={this.props.gameStatus.availableAntsRefill} identity={this.props.playerName} playerTurn={this.props.currentPlayer.playerName}/>
                    <PlaceAnts changeTerritory1={this.props.changeTerritory1} changeNbAnts={this.props.changeNbAnts} placeAnts={this.props.placeAnts} rendering={this.props.gameStatus.placeAntsOn} available={this.props.gameStatus.availableAntsRefill} identity={this.props.playerName} playerTurn={this.props.currentPlayer.playerName}/>
                    <PlaceFirstAnts changeTerritory1={this.props.changeTerritory1} placeFirstAnts={this.props.placeFirstAnts} rendering={this.props.gameStatus.placeFirstAntsOn} available={this.props.gameStatus.availableAntsRefill} identity={this.props.playerName} playerTurn={this.props.currentPlayer.playerName}/>
                </div>
            </div>
        );
    }
}

export default MapGame;
