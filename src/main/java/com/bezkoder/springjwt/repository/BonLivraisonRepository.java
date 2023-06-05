package com.bezkoder.springjwt.repository;


import com.bezkoder.springjwt.models.BonLivraison;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BonLivraisonRepository extends JpaRepository<BonLivraison, Long> {
}
