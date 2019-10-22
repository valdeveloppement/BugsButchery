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
	
	//start
	@MessageMapping("/app.startGame")
	@SendTo("/bugsbutchery")
	public Game startGame(@Payload Game game) {
		
		return game;
	}
	
	//multi turn pick territory untill all taken
		//
	@MessageMapping("/app.pickTerritory")
	@SendTo("/bugsbutchery")
	public Game pickTerritory(@Payload Game game) {
		
		return game;
	}
	
	//multi turn reinforcement untill all spent
		//
	@MessageMapping("/app.addAnt")
	@SendTo("/bugsbutchery")
	public Game addAnt(@Payload Game game) {
		
		return game;
	}
	//multi turn game on
	//reinforcement
	@MessageMapping("/app.refill")
	@SendTo("/bugsbutchery")
	public Game refill(@Payload Game game) {
		
		return game;
	}
		
	//attack
	@MessageMapping("/app.requestAttack")
	@SendTo("/bugsbutchery")
	public Game requestAttack(@Payload Game game) {
		
		return game;
	}
	@MessageMapping("/app.requestDefense")
	@SendTo("/bugsbutchery")
	public Game requestDefense(@Payload Game game) {
		
		return game;
	}
	
	//move
	@MessageMapping("/app.move")
	@SendTo("/bugsbutchery")
	public Game move(@Payload Game game) {
		
		return game;
	}
}