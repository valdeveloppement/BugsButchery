package com.bugsButchery.demo;

import static org.junit.Assert.*;

import org.junit.Test;

public class testfindfamily {

	@Test
	public void test() {

	Family myfamily = new Family();
	Territory myterritory1 = new Territory();
	Territory myterritory2 = new Territory();
	Territory myterritory3 = new Territory();
	Territory myterritory4 = new Territory();
	BugsButcheryService myService = new BugsButcheryService(); 
	
	myfamily.setFamilyId(1);
	
	myterritory1.setTerritoryFamily(myfamily);
	myterritory2.setTerritoryFamily(myfamily);
	myterritory3.setTerritoryFamily(myfamily);
	myterritory4.setTerritoryFamily(myfamily);
	
	myService.findAllByTerritoryFamily(myfamily);
	
	}

}
