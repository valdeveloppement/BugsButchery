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
		}

		ArrayList<Territory> TerritoryFrontiersMine =territory1.getTerritoryFrontiers();
		TerritoryFrontiersMine.retainAll(potentialsTerritories);	


		if(TerritoryFrontiersMine.size()==0) {
			return false;
		}


		else {

			for (Territory thisTerritory : TerritoryFrontiersMine) {

				if (thisTerritory.equals(territory2)) {
					pathExist=1;
				}

				else {
					//				crossedTerritories.add(thisTerritory);
					//				potentialsTerritories.removeAll(crossedTerritories);
					potentialsTerritories.remove(thisTerritory);
					moveOneStep(thisTerritory, territory2);
				}
			}

		}
		
		
		return false;




	}







}
