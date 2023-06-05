package com.bezkoder.springjwt.security.services;

import com.bezkoder.springjwt.models.BonCommande;


import java.util.List;

public interface BonCommandeService {

     BonCommande creer(BonCommande bonCommande);

    List<BonCommande> lire();

     String supprimer(long id);
}
