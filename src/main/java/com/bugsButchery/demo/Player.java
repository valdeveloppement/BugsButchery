package com.bugsButchery.demo;

import java.util.ArrayList;

public class Player {

	private int playerId;
	private String playerName;
	private String playerAntsBreed;
	private ArrayList<Territory> playerTerritoryList; 
	private ArrayList<Family> playerTerritoryFamilyList;
	private int playerAvailableAnts;
	
	public Player() {
		super();
	}
	
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
	public void setPlayerTerritoryList(ArrayList<Territory> playerTerritoryList) {
		this.playerTerritoryList = playerTerritoryList;
	}
	public ArrayList<Family> getPlayerTerritoryFamilyList() {
		return playerTerritoryFamilyList;
	}
	public void setPlayerTerritoryFamilyList(ArrayList<Family> playerTerritoryFamilyList) {
		this.playerTerritoryFamilyList = playerTerritoryFamilyList;
	}
	public int getPlayerAvailableAnts() {
		return playerAvailableAnts;
	}
	public void setPlayerAvailableAnts(int playerAvailableAnts) {
		this.playerAvailableAnts = playerAvailableAnts;
	}
	
	/**
	 * roll a Dice
	 * @return
	 */
	public int rollDice() {
		return (int)Math.ceil(Math.random()*6);
	}
	
//	public int refillAvailableAnts(Player player) {
//		
//	}
	
	
}
