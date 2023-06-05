package com.bezkoder.springjwt.security.services;


import com.bezkoder.springjwt.models.societeClient;

import java.util.List;

public interface societeClientService {
    societeClient creer(societeClient societeClient);

    List<societeClient> lire();
    societeClient lire (long id);
    societeClient modifier(long id, societeClient societeClient);
    String supprimer(long id);
}
