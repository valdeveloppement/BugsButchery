package com.bugsButchery.demo;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.Cascade;

@Entity
public class Territory {

	@Id
	@GeneratedValue
	private int territoryId;
	private String territoryName;
	private int territoryValue;
	@ManyToMany(cascade = CascadeType.ALL)
//	@JoinTable(
//			  name = "frontier", 
//			  joinColumns = @JoinColumn(name = "frontier_id"),
//			  inverseJoinColumns = @JoinColumn(name = "territory_id"))	
	private List<Territory> territoryFrontiers;
	private boolean isAnthill;
	@ManyToOne
	private Family territoryFamily;
	private int territoryAntsNb;	
	@Transient
	private Player territoryOwner;
	
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
	public List<Territory> getTerritoryFrontiers() {
		return territoryFrontiers;
	}
	public void setTerritoryFrontiers(List<Territory> territoryFrontiers) {
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
