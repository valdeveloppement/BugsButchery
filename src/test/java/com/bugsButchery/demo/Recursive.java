package com.bugsButchery.demo;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class Recursive {

	@Autowired
	BugsButcheryService bugg;
	
	@Test
	public void test() {
		
		List<Territory> allTerritories = new ArrayList<Territory>();
		ArrayList<Territory> territoryMaurane = new ArrayList<Territory>();
		ArrayList<Territory> territorySylvain = new ArrayList<Territory>();
		ArrayList<Territory> territoryValentin = new ArrayList<Territory>();
		ArrayList<Territory> territoryEloise = new ArrayList<Territory>();
		ArrayList<Family> familyMaurane = new ArrayList<Family>();
		ArrayList<Family> familySylvain = new ArrayList<Family>();
		ArrayList<Family> familyValentin = new ArrayList<Family>();
		ArrayList<Family> familyEloise = new ArrayList<Family>();
		
		
		for (Territory entry : bugg.myTerritoryRepository.findAll()) {
			allTerritories.add(entry);
			System.out.println(entry);
		}
	    
	    System.out.println(allTerritories);
		
		      Player maurane = new Player(1, "Maurane", "fourmis violettes", territoryMaurane, familyMaurane, 30);
		      Player valentin = new Player(2, "Valentin", "fourmis noires", territoryValentin, familyValentin, 30);
		      Player sylvain = new Player(3, "Sylvain", "fourmis vertes", territorySylvain, familySylvain, 30);
		      Player eloise = new Player(4, "Eloise", "fourmis rouges", territoryEloise, familyEloise, 30);
		
		
		
		      bugg.addPlayer(maurane);
		      bugg.addPlayer(valentin);
		      bugg.addPlayer(sylvain);
		      bugg.addPlayer(eloise);
		
		      bugg.placeFirstAnts(maurane, allTerritories.get(1) );
		      bugg.placeFirstAnts(maurane, allTerritories.get(6));
		      bugg.placeFirstAnts( maurane, allTerritories.get(3));
		      bugg.placeFirstAnts(valentin, allTerritories.get(7));
		      bugg.placeFirstAnts(valentin, allTerritories.get(0));
		      bugg.placeFirstAnts(sylvain, allTerritories.get(5));
		      bugg.placeFirstAnts(eloise, allTerritories.get(8));
		      bugg.placeFirstAnts(eloise, allTerritories.get(2));
		      bugg.placeFirstAnts(eloise, allTerritories.get(4));
	    }
		
}

