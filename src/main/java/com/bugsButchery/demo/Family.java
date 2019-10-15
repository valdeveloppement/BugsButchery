package com.bugsButchery.demo;

public class Family {

	private int familyId;
	private String familyName;
	private int familyValue;
	
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
	public Territory findAllByTerritoryFamily(Family territoryFamily) {
		// TODO Auto-generated method stub
		return null;
	}
	
}
