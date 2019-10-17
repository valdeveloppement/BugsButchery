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
	
	

	public Player(int playerId, String playerName, String playerAntsBreed, ArrayList<Territory> playerTerritoryList,
			ArrayList<Family> playerTerritoryFamilyList, int playerAvailableAnts) {
		super();
		this.playerId = playerId;
		this.playerName = playerName;
		this.playerAntsBreed = playerAntsBreed;
		this.playerTerritoryList = playerTerritoryList;
		this.playerTerritoryFamilyList = playerTerritoryFamilyList;
		this.playerAvailableAnts = playerAvailableAnts;
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
	public int getPlayerAvailableAnts() {
		return playerAvailableAnts;
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

}
