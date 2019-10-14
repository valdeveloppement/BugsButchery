package com.bugsButchery.demo;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class BugsButcheryService {

	@Autowired
	TerritoryRepository territoryRep;
	
	//New Game
	/**
	 * check if all territory are assigned to a player
	 * @return
	 */
	public boolean checkAllTerritoryPicked() {
		List<Territory> allTerritory = new ArrayList<Territory>();
		allTerritory = territoryRep.findAll();
		for (Territory entry : allTerritory) {
			if (entry.getTerritoryOwner() == null) {
				return false;
			}
		}
		return true;
	}
	
	//Phase 2 attack /optional
		/**
		 * check country pawn number if pawn < 1 can't attack.
		 * @param id
		 * @return
		 */
	public boolean antNumber(Territory territory) {
		if (territory.getTerritoryAntsNb() > 1) {
			return true;
		}
		else {
			return false;
		}
	}
		
	/**
	 * check if the player have at least 1 pawn left on the country
	 * @param country
	 * @param nbrDiceAttack
	 * @return
	 */
	public boolean oneAntBehind(Territory territoty, int nbrDiceAttack) {
		if (territoty.getTerritoryAntsNb() > nbrDiceAttack) {
			return true;
		}
		else {
			return false;
		}
	}
	
	/**
	 * check if country as path to target country
	 * @param idCurrent
	 * @param idTarget
	 * @return
	 */
	public boolean pathExist(Territory attacker, Territory target) {
		
		if (attacker.getTerritoryFrontiers().contains(target)) {
			return true;
		}
		else {
			return false;
		}
	}
	
	/**
	 * Regroup all 3 checks (antNumber, oneAntBehind and pathExist)
	 * @param attacker
	 * @param target
	 * @param nbrDiceAttack
	 * @return
	 */
	public boolean canAttack(Territory attacker, Territory target, int nbrDiceAttack) {
		if (antNumber(attacker) && pathExist(attacker, target) && oneAntBehind(attacker, nbrDiceAttack)) {
			return true;
		}
		else {
			return false;
		}
	}
	
	/**
	 * Check if player has conquiered the territory
	 * @param country
	 * @param player
	 * @return
	 */
	public boolean checkConquest(Territory territory) {
		if (territory.getTerritoryAntsNb() > 0) {
			return false;
		}
		else {
			return true;
		}
	}
	
	/**
	 * Moving through the all fight
	 * @param current
	 * @param attacker
	 * @param nbrDiceAttack
	 * @param defender
	 * @param target
	 * @param nbrDiceDefender
	 */
	public void diceFight(Player current, Territory attacker, int nbrDiceAttack, Player defender, Territory target, int nbrDiceDefender){
		if(canAttack(attacker, target, nbrDiceAttack)) {
			ArrayList<Integer> resultCurrent = new ArrayList<Integer>();
			ArrayList<Integer> resultTarget = new ArrayList<Integer>();
			for (int i = 0; i < nbrDiceAttack; i++) {
				resultCurrent.add(current.rollDice());
			}
			for (int i = 0; i < nbrDiceDefender; i++) {
				resultTarget.add(defender.rollDice());
			}

			Collections.sort(resultCurrent, Collections.reverseOrder());
			Collections.sort(resultTarget, Collections.reverseOrder());

			if (resultCurrent.size() < 2 || resultTarget.size() < 2) {
				if (resultCurrent.get(0) > resultTarget.get(0)) {
					//System.out.println("target -1");
				}
				else {
					//System.out.println("current -1");
				}
			}
			else if (resultCurrent.get(0) > resultTarget.get(0) && resultCurrent.get(1) > resultTarget.get(1)) {
				//System.out.println("target -2");
			}
			else if (resultCurrent.get(0) > resultTarget.get(0) && resultCurrent.get(1) <= resultTarget.get(1)) {
				//System.out.println("current -1 target -1");
			}
			else if (resultCurrent.get(0) <= resultTarget.get(0) && resultCurrent.get(1) > resultTarget.get(1)) {
				//System.out.println("current -1 target -1");
			}
			else {
				//System.out.println("current -2");
			}
			if(checkConquest(target)) {
				//winner > moveAfterConquest
			}
			else {
				//keepAttacking?
			}
		}
		else {
			//cant attack at least on check failed
		}
	}
	
	/**
	 * Moving ants after a conquest between the two territories
	 * @param attacker
	 * @param target
	 * @param pawnNbr
	 */
//	public void moveAfterConquest(Territory attacker, Territory target, int antNbr) {
//		(attacker.getTerritoryAntsNb() - antNbr);
//		(target.getTerritoryAntsNb() + antNbr);
//		//NOT FINISH 
//	}
}
