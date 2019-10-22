package com.bugsButchery.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;



@Controller
public class WebSocketController {

	@Autowired
	BugsButcheryService bugService;
	

	//new player
		//
    @MessageMapping("/newPlayer")
    @SendTo("/bugsbutchery")
    public Game test(Player player) {
        System.out.println("it works");
        bugService.createNewPlayer(player);
        System.out.println(player.getPlayerName());
        return bugService.myGame;
    }
      
	
	//start
    	//
	@MessageMapping("/startGame")
	@SendTo("/bugsbutchery")
	public Game startGame(Game game) {
		return bugService.myGame;
	}
	
	//multi turn pick territory untill all taken
		//
	@MessageMapping("/pickTerritory")
	@SendTo("/bugsbutchery")
	public Game pickTerritory(Player player, Territory territory) {
		bugService.placeFirstAnts(player, territory);
		return bugService.myGame;
	}
	
	
	//multi turn reinforcement untill all spent
		//
	@MessageMapping("/addAnt")
	@SendTo("/bugsbutchery")
	public Game addAnt(Player player, Territory territory, int ants) {
		bugService.placeAnts(player, territory, ants);
		return bugService.myGame;
	}
	
	//multi turn pick anthill
		//
	@MessageMapping("/addAnthill")
	@SendTo("/bugsbutchery")
	public Game addAnthill(Player player, Territory territory, int ants) {
		bugService.addAntsHill(player, territory);
		return bugService.myGame;
	}
	
	//multi turn game on
		//reinforcement
	@MessageMapping("/refill")
	@SendTo("/bugsbutchery")
	public Game refill(Player player) {
		bugService.refillAvailableAnts(player);
		return bugService.myGame;
	}
		
	//attack
	@MessageMapping("/requestAttack")
	@SendTo("/bugsbutchery")
	public Game requestAttack(Territory attacker, Territory target, int nbrDiceAttack) {
		bugService.requestAttack(attacker, target, nbrDiceAttack);
		return bugService.myGame;
	}
	
	@MessageMapping("/requestDefense")
	@SendTo("/bugsbutchery")
	public Game requestDefense(Territory defender, int nbrDiceDefense) {
		bugService.requestDefense(defender, nbrDiceDefense);
		return bugService.myGame;
		
	}
	
	//move
	@MessageMapping("/move")
	@SendTo("/bugsbutchery")
	public Game move(Player player, Territory territoryStart, Territory territoryArrival, int antNbr) {
		bugService.moveAvailable(player, territoryStart, territoryArrival, antNbr);
		return bugService.myGame;
	}
}