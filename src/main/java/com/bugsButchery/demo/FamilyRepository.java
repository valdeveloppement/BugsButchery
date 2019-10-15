package com.bugsButchery.demo;


import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;

public interface FamilyRepository extends JpaRepository<Family, Integer>{

	ArrayList<Territory> findAllByTerritoryFamily(Family territoryFamily);

}
