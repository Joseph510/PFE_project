package com.bezkoder.springjwt.repository;


import com.bezkoder.springjwt.models.BonCommande;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BonCommandeRepository extends JpaRepository<BonCommande, Long> {
}
