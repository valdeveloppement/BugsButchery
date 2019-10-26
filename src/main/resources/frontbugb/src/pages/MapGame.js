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
            isAttackOn: false,
            isDefenseOn: false,
            isAvailableAntsRefill: false,
            isGameOn: false,
            ifGameSetOn: false,
            isMoveOn: false,
            isPlaceAnthillOn: false,
            isPlaceAntsOn: false,
            isPlaceFirstAntsOn: false,
        };
    }

    button = null;

    booleanFactory = () => {
        if(this.props.playerName === this.props.currentPlayer.playerName) {
            if(this.props.gameStatus.attackOn) {
                this.setState({isAttackOn: true})
            }
            else if (this.props.gameStatus.defenseOn) {
                this.setState({isDefenseOn: true})
            }
            else if (this.props.gameStatus.availableAntsRefill) {
                this.setState({isAvailableAntsRefill: true})
            }
            else if (this.props.gameStatus.gameOn) {
                this.setState({isGameOn: true})
            }
            else if (this.props.gameStatus.gameSetOn) {
                this.setState({ifGameSetOn: true})
            }
            else if (this.props.gameStatus.moveOn) {
                this.setState({isMoveOn: true})
            }
            else if (this.props.gameStatus.placeAnthillOn) {
                this.setState({isPlaceAnthillOn: true})
            }
            else if (this.props.gameStatus.placeAntsOn) {
                this.setState({isPlaceAntsOn: true})
            }
            else if (this.props.gameStatus.placeFirstAntsOn) {
                this.setState({isPlaceFirstAntsOn: true})
            }
        }           
    }

    render() {

        return (
            <div className="contenant">
                <div className="carte">
                    {this.props.allTerritories.map((i, index) => {
                         return ( <Territory 
                            key={index}
                            color={i.territoryName}
                            value={i.territoryName}
                            int={i.territoryAntsNb}
                            player={i.territoryOwner ? i.territoryOwner : "libre"}
                            family={this.props.allFamilies.find(elem => elem.familyId === i.territoryFamily)}
                         /> )
                    })}
                    
                </div>

                <div className="informationJeu">
                    <InfosPlayer className="infos" playerList={this.props.playerList} />
                </div>
                <div>
                    <InfosMessage className="infos" message={this.props.message} />
                </div>

                <div className="playingGround">
                    {this.state.isAttackOn ? <Attack skip={this.props.skip} requestAttack={this.props.requestAttack}/> : <p></p>  }
                    {this.state.isDefenseOn ? <Defense requestDefense={this.props.requestDefense}/> : <p></p> }
                    {this.state.isMoveOn ? <Move skip={this.props.skip} moveAvailable={this.props.moveAvailable}/> : <p></p>  }
                    {this.state.isPlaceAnthillOn ? <Anthill addAnthill={this.props.addAnthill} /> : <p></p> }
                    {this.state.isPlaceAntsOn ? <PlaceAnts placeAnts={this.props.placeAnts}/> : <p></p> }
                    {this.state.isPlaceFirstAntsOn ? <PlaceFirstAnts placeFirstAnts={this.props.placeFirstAnts}/> :<p></p> } 
                </div>

            </div>
        );
    }
}


export default MapGame;
