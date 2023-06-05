package com.bezkoder.springjwt.security.services;



import com.bezkoder.springjwt.models.Calendrier;

import java.util.List;

public interface CalendrierService {
    Calendrier creerevent(Calendrier calendrier);

    List<Calendrier> lire();

    String deleteEvent(long id);
}
