package com.bugsButchery.demo;

import java.time.LocalDate;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;


@Controller
public class WebSocketController {

	@MessageMapping("/command.sendPlayer")
    @SendTo("/bugsbutchery")
    public Player sendMessage(@Payload Player player) {
    	player.setPlayerName(player.getPlayerName());
    	player.setPlayerAntsBreed(player.getPlayerAntsBreed());
        return player;
    }
	
	//new player
	
	//start
	
	//multi turn pick territory untill all taken
		//
	
	//multi turn reinforcement untill all spent
		//
	
	//multi turn game on
		//reinforcement
		//attack
		//move
	
	
}
