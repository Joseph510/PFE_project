package com.bezkoder.springjwt.repository;


import com.bezkoder.springjwt.models.commande;
import org.springframework.data.jpa.repository.JpaRepository;

public interface commandeRepository extends JpaRepository<commande, Long> {
}
