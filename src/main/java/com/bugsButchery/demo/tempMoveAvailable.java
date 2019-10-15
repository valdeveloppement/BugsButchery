package com.bugsButchery.demo;

import java.util.ArrayList;




public class tempMoveAvailable {


	protected ArrayList<Territory> potentialsTerritories;
	protected int pathExist;

	//protected ArrayList<Territory> crossedTerritories;





	public boolean moveAvailable(Player player, Territory territoryStart, Territory territoryArrival, int antNbr ) {	

		// VALEURS INITIALES
		potentialsTerritories = player.getPlayerTerritoryList();
		//	crossedTerritories = new ArrayList<Territory>();          
		pathExist=0;
		boolean thereIsAPath=false;

		moveOneStep(territoryStart, territoryArrival);

		if (pathExist==1) {
			territoryStart.setTerritoryAntsNb(territoryStart.getTerritoryAntsNb()-antNbr);
			territoryArrival.setTerritoryAntsNb(territoryArrival.getTerritoryAntsNb()+antNbr);
			thereIsAPath=true;
		}
		

		return thereIsAPath;



	}






	public boolean moveOneStep(Territory territory1, Territory territory2) {
		
		potentialsTerritories.remove(territory1);
		if(potentialsTerritories.size()==0) {
			return false;
		}//if 0 territory except territory1 (||& territories already crossed) = false

		ArrayList<Territory> TerritoryFrontiersMine =territory1.getTerritoryFrontiers(); 
		TerritoryFrontiersMine.retainAll(potentialsTerritories); // valeurs de territoryFrontierMine se croisent avec les territoires frontaliers (also return true)


		if(TerritoryFrontiersMine.size()==0) {
			return false;
		} // si pas de territoires frontaliers = false


		else { 

			for (Territory thisTerritory : TerritoryFrontiersMine) { // pour les territoires frontaliers

				if (thisTerritory.equals(territory2)) {
					pathExist=1;
				} //quand la boucle tombe sur le territoire de destination,  = path exist

				else {
					//				crossedTerritories.add(thisTerritory);
					//				potentialsTerritories.removeAll(crossedTerritories);
					potentialsTerritories.remove(thisTerritory); //supprime de la liste des territoires à traiter
					moveOneStep(thisTerritory, territory2); // continue à chercher le territoire de à partir de la nouvelle position 'thisterritoy'
				}
			}

		}
		
		
		return false;




	}







}
