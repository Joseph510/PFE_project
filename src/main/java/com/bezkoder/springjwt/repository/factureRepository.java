package com.bezkoder.springjwt.repository;


import com.bezkoder.springjwt.models.facture;
import org.springframework.data.jpa.repository.JpaRepository;

public interface factureRepository extends JpaRepository<facture, Long> {
}
