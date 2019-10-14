package com.bugsButchery.demo;

import java.util.ArrayList;

public class tempMoveAvailable {

	
	public boolean moveAvailable(Player player, Territory territoryStart, Territory territoryArrival, int antNbr ) {	
		
		
		ArrayList<Territory> potentialsTerritories = player.getPlayerTerritoryList();	
		
		ArrayList<Territory> crossedTerritories = new ArrayList<Territory>();              
		
		potentialsTerritories.removeAll(crossedTerritories);
		

		ArrayList<Territory> myTerritoryFrontiers =territoryStart.getTerritoryFrontiers();
		myTerritoryFrontiers.retainAll(potentialsTerritories);
	
		
		
		
		
		return false;
		
	}
	

	
	
	
	
}
