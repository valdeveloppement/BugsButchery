package com.bugsButchery.demo;



import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;



@Entity
public class Family {

	@Id
	@GeneratedValue
	private int familyId;
	private String familyName;
	private int familyValue;
	@OneToMany(mappedBy = "territoryFamily", fetch=FetchType.EAGER)
	@JsonIgnoreProperties("territoryFamily")
	private List<Territory> allTerritories;
	
	
	public Family() {
		super();
	}
	
	public int getFamilyId() {
		return familyId;
	}
	public void setFamilyId(int familyId) {
		this.familyId = familyId;
	}
	public String getFamilyName() {
		return familyName;
	}
	public void setFamilyName(String familyName) {
		this.familyName = familyName;
	}
	public int getFamilyValue() {
		return familyValue;
	}
	public void setFamilyValue(int familyValue) {
		this.familyValue = familyValue;
	}

	public List<Territory> getAllTerritories() {
		return allTerritories;
	}

	public void setAllTerritories(List<Territory> allTerritories) {
		this.allTerritories = allTerritories;
	}

}
