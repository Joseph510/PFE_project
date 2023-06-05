package com.bezkoder.springjwt.security.services;



import com.bezkoder.springjwt.models.commande;

import java.util.List;


public interface commandeService {

        List<commande> lire();

        commande modifier(long id, commande commande);

        String supprimer(long id);


        commande creer(commande commande);
}

