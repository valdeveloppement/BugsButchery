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
	
<<<<<<< HEAD
//	//new player
//	@MessageMapping("/app.newPlayer")
//	@SendTo("/bugsbutchery")
//	public void newPlayer(@Payload Player player) {
//		System.out.println("sdfergfte");
//		bugService.createNewPlayer(player);
//
//	}
	
	
	
	@MessageMapping("/app.newPlayer")
    @SendTo("/bugsbutchery")
	public void newPlayer(Player player) throws Exception {
    	System.out.println("zded");
        Thread.sleep(100); // simulated delay
       
    }
=======
	//new player
	@MessageMapping("/app/newPlayer")
	@SendTo("/bugsbutchery")
	public Game newPlayer(@Payload Game game, Player player) {

		// if false => retourner une autre page pour les joueurs en trop 

		bugService.createNewPlayer(player);
		return game;

	}
>>>>>>> 09bc6e112fe9d3f48b9894e9af9705ee45d09ee3
	
	//start
	@MessageMapping("/app/startGame")
	@SendTo("/bugsbutchery")
	public Game startGame(@Payload Game game) {
		
		
		return game;
	}
	
	//multi turn pick territory untill all taken
		//
	@MessageMapping("/app/pickTerritory")
	@SendTo("/bugsbutchery")
	public Game pickTerritory(@Payload Game game, Player player, Territory territory) {
		bugService.placeFirstAnts(player, territory);
		return game;
	}
	
	//multi turn reinforcement untill all spent
		//
	@MessageMapping("/app/addAnt")
	@SendTo("/bugsbutchery")
	public Game addAnt(@Payload Game game, Player player, Territory territory, int ants) {
		bugService.placeAnts(player, territory, ants);
		return game;
	}
	//multi turn game on
	//reinforcement
	@MessageMapping("/app/refill")
	@SendTo("/bugsbutchery")
	public Game refill(@Payload Game game, Player player) {
		bugService.refillAvailableAnts(player);
		return game;
	}
		
	//attack
	@MessageMapping("/app/requestAttack")
	@SendTo("/bugsbutchery")
	public Game requestAttack(@Payload Game game, Territory attacker, Territory target, int nbrDiceAttack) {
		bugService.requestAttack(attacker, target, nbrDiceAttack);
		return game;
	}
	
	@MessageMapping("/app/requestDefense")
	@SendTo("/bugsbutchery")
	public Game requestDefense(@Payload Game game, Territory defender, int nbrDiceDefense) {
		bugService.requestDefense(defender, nbrDiceDefense);
		return game;
		
	}
	
	//move
	@MessageMapping("/app/move")
	@SendTo("/bugsbutchery")
	public Game move(@Payload Game game, Player player, Territory territoryStart, Territory territoryArrival, int antNbr) {
		bugService.moveAvailable(player, territoryStart, territoryArrival, antNbr);
		return game;
	}
}