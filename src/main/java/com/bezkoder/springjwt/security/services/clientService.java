package com.bezkoder.springjwt.security.services;



import com.bezkoder.springjwt.models.client;

import java.util.List;
public interface clientService {
    client creer(client client);

    List <client> lire();
    client modifier(long id, client client);
    String supprimer(long id);
}
