package com.bezkoder.springjwt.security.services;



import com.bezkoder.springjwt.models.fournisseur;

import java.util.List;

public interface fournisseurService {
    fournisseur creer(fournisseur fournisseur);

    List<fournisseur> lire();

    fournisseur modifier(long id, fournisseur fournisseur);

    String supprimer(long id);
}
