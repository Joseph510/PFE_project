package com.bezkoder.springjwt.security.services;


import com.bezkoder.springjwt.models.Calendrier;
import com.bezkoder.springjwt.repository.CalendrierRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CalendrierServiceImpl implements CalendrierService{
    private final CalendrierRepository calendrierRepository;

    @Override
    public Calendrier creerevent(Calendrier calendrier) {
        return calendrierRepository.save(calendrier);
    }

    @Override
    public List<Calendrier> lire() {
        return calendrierRepository.findAll();
    }

    @Override
    public String deleteEvent(long id) {
         calendrierRepository.deleteById(id);
         return "evenement supprimé !";
    }


}
