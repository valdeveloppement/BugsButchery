package com.bugsButchery.demo;

import java.util.ArrayList;

public class Player {

	//---- value objet ----//
	private int playerId;
	private String playerName;
	private String playerAntsBreed;
	private ArrayList<Territory> playerTerritoryList; 
	private ArrayList<Family> playerTerritoryFamilyList;
	private int playerAvailableAnts;
	
	//---- constructor ----//
	public Player() {
		super();
	}

	//---- get & set ----//

	public int getPlayerId() {
		return playerId;
	}
	public void setPlayerId(int playerId) {
		this.playerId = playerId;
	}
	public String getPlayerName() {
		return playerName;
	}
	public void setPlayerName(String playerName) {
		this.playerName = playerName;
	}
	public String getPlayerAntsBreed() {
		return playerAntsBreed;
	}
	public void setPlayerAntsBreed(String playerAntsBreed) {
		this.playerAntsBreed = playerAntsBreed;
	}
	public ArrayList<Territory> getPlayerTerritoryList() {
		return playerTerritoryList; 
	}
	public void setPlayerAvailableAnts(int playerAvailableAnts) {
		this.playerAvailableAnts = playerAvailableAnts;
	}
	public ArrayList<Family> getPlayerTerritoryFamilyList() {
		return playerTerritoryFamilyList;
	}

	public void setPlayerTerritoryFamilyList(ArrayList<Family> playerTerritoryFamilyList) {
		this.playerTerritoryFamilyList = playerTerritoryFamilyList;
	}
		
	/**
	 * roll a Dice
	 * @return
	 */
	public int rollDice() {
		return (int)Math.ceil(Math.random()*6);
	}
	
	
	/**
	 * placer le nombre de fourmis que l'on veut sur un territoire possédé
	 * @param player
	 * @param territory
	 * @param ants
	 * @return
	 */
	public ArrayList<Territory> placeAnts(Player player, Territory territory, int ants) {
		
		if (player.getPlayerTerritoryList().contains(territory)) {
		//si le player possède le territoire (nommé ici territory) qu'on fait passer dans la méthode	
			territory.setTerritoryAntsNb(territory.getTerritoryAntsNb()+ants);
			//le territoire possédé ...
			playerAvailableAnts = playerAvailableAnts - ants;
		}
		return playerTerritoryList;
		//retourn la liste des territoires qui on changé dans la methode
	}

	/**
	 * placer tour a tour une fourmi pour définir a qui sont les territoires
	 * @param player
	 * @param territory
	 * @return
	 */
	public ArrayList<Territory> placeFirstAnts(Player player, Territory territory) {
		
		if (territory.getTerritoryOwner() == null) {
		//si le territoire séléctionner est égal a vide
			playerTerritoryList.add(territory);
			//ajoute territoire a la liste de territoire du player
			playerAvailableAnts = playerAvailableAnts - 1;
			//enlever une fourmi au compte total de fourmi du player
		}
		return playerTerritoryList;
		//retourn la liste des territoires qui on changé dans la methode
	}


}
