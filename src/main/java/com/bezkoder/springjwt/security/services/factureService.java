package com.bezkoder.springjwt.security.services;



import com.bezkoder.springjwt.models.facture;

import java.util.List;

public interface factureService {
    facture creer(facture facture);

    List<facture> lire();

    facture modifier(long id, facture facture);

    String supprimer(long id);
}
