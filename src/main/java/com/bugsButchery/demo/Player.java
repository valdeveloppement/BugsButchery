package com.bugsButchery.demo;

import java.util.ArrayList;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


public class Player {

	//---- value objet ----//
	private String playerName;
	private String playerAntsBreed;
	
    @JsonIgnoreProperties("playerTerritoryList")
	private ArrayList<Territory> playerTerritoryList= new ArrayList<Territory>();

	private ArrayList<Family> playerTerritoryFamilyList = new ArrayList<Family>();
	private int playerAvailableAnts;
	
	//---- constructor ----//
	public Player() {
		super();
	}
	

	public Player(String playerName, String playerAntsBreed, int playerAvailableAnts) {


		super();
		this.playerName = playerName;
		this.playerAntsBreed = playerAntsBreed;
		this.playerAvailableAnts = playerAvailableAnts;


//		this.playerTerritoryList = new ArrayList<Territory>();
//		this.playerTerritoryFamilyList = new ArrayList<Integer>();

	}


	//---- get & set ----//

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


	public void setPlayerTerritoryList(ArrayList<Territory> playerTerritoryList) {
		this.playerTerritoryList = playerTerritoryList;
	}


	public int getPlayerAvailableAnts() {
		return playerAvailableAnts;
	}


	/**
	 * roll a Dice
	 * @return
	 */
	public int rollDice() {
		return (int)Math.ceil(Math.random()*6);
	}

}
