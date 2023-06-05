package com.bezkoder.springjwt.repository;


import com.bezkoder.springjwt.models.Produit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProduitRepository extends JpaRepository<Produit, Long> {
    public Produit findFirstByOrderByIdDesc();
    Produit findBytitre(String titre);


}
