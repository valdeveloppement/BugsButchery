package com.bugsButchery.demo;

import java.util.ArrayList;

import javax.persistence.Column;

public class Territory {

	private int territoryId;
	private String territoryName;
	private int territoryValue;
	private ArrayList<Territory> territoryFrontiers;
	@Column(name="territory_owner_id")
	private Player territoryOwner;
	private boolean isAnthill;
	private Family territoryFamily;
	private int territoryAntsNb;
	
	public Territory() {
		super();
	}
	
	public int getTerritoryId() {
		return territoryId;
	}
	public void setTerritoryId(int territoryId) {
		this.territoryId = territoryId;
	}
	public String getTerritoryName() {
		return territoryName;
	}
	public void setTerritoryName(String territoryName) {
		this.territoryName = territoryName;
	}
	public int getTerritoryValue() {
		return territoryValue;
	}
	public void setTerritoryValue(int territoryValue) {
		this.territoryValue = territoryValue;
	}
	public ArrayList<Territory> getTerritoryFrontiers() {
		return territoryFrontiers;
	}
	public void setTerritoryFrontiers(ArrayList<Territory> territoryFrontiers) {
		this.territoryFrontiers = territoryFrontiers;
	}
	public Player getTerritoryOwner() {
		return territoryOwner;
	}
	public void setTerritoryOwner(Player territoryOwner) {
		this.territoryOwner = territoryOwner;
	}
	public boolean isAnthill() {
		return isAnthill;
	}
	public void setAnthill(boolean isAnthill) {
		this.isAnthill = isAnthill;
	}
	public Family getTerritoryFamily() {
		return territoryFamily;
	}
	public void setTerritoryFamily(Family territoryFamily) {
		this.territoryFamily = territoryFamily;
	}
	public int getTerritoryAntsNb() {
		return territoryAntsNb;
	}
	public void setTerritoryAntsNb(int territoryAntsNb) {
		this.territoryAntsNb = territoryAntsNb;
	}
	
	
}
