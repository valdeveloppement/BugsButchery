package com.bugsButchery.demo;

import java.util.ArrayList;

public class Game {

	

	protected ArrayList<Territory> unownedTerritories = new ArrayList<Territory>();
	protected ArrayList<Player> playersAlive = new ArrayList<Player>();
	protected Player playerTurn; // = playersAlive.get(0);
	protected ArrayList<Territory> potentialsTerritories= new ArrayList<Territory>();
	protected int pathExist;
	protected ArrayList<Territory> allTerritories = new ArrayList<Territory>();
    protected ArrayList<Family> allFamilies = new ArrayList<Family>();
    protected String message;

	
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public ArrayList<Family> getAllFamilies() {
		return allFamilies;
	}
	public void setAllFamilies(ArrayList<Family> allFamilies) {
		this.allFamilies = allFamilies;
	}
	public ArrayList<Territory> getAllTerritories() {
		return allTerritories;
	}
	public void setAllTerritories(ArrayList<Territory> allTerritories) {
		this.allTerritories = allTerritories;
	}
	public ArrayList<Territory> getUnownedTerritories() {
		return unownedTerritories;
	}
	public void setUnownedTerritories(ArrayList<Territory> unownedTerritories) {
		this.unownedTerritories = unownedTerritories;
	}
	public ArrayList<Player> getPlayersAlive() {
		return playersAlive;
	}
	public void setPlayersAlive(ArrayList<Player> playersAlive) {
		this.playersAlive = playersAlive;
	}
	public Player getPlayerTurn() {
		return playerTurn;
	}
	public void setPlayerTurn(Player playerTurn) {
		this.playerTurn = playerTurn;
	}
	public ArrayList<Territory> getPotentialsTerritories() {
		return potentialsTerritories;
	}
	public void setPotentialsTerritories(ArrayList<Territory> potentialsTerritories) {
		this.potentialsTerritories = potentialsTerritories;
	}
	public int getPathExist() {
		return pathExist;
	}
	public void setPathExist(int pathExist) {
		this.pathExist = pathExist;
	}
	
}
