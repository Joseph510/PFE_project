package com.bezkoder.springjwt.security.services;



import com.bezkoder.springjwt.models.Produit;

import java.util.List;

public interface ProduitService {
    Produit creer(Produit produit);

    List <Produit> lire();
    Produit lire (long id);
    Produit modifier(long id, Produit produit);
    String supprimer(long id);
    public Produit findBytitre(String titre);

}
