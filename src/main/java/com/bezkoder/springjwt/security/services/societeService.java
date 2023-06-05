package com.bezkoder.springjwt.security.services;



import com.bezkoder.springjwt.models.societe;

import java.util.List;
public interface societeService {
    societe creer(societe societe);

    List <societe> lire();
    societe lire (long id);
    societe modifier(long id, societe societe);
    String supprimer(long id);

}
