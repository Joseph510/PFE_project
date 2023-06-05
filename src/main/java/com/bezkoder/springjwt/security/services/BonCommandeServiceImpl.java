package com.bezkoder.springjwt.security.services;

import com.bezkoder.springjwt.models.BonCommande;

import com.bezkoder.springjwt.repository.BonCommandeRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class BonCommandeServiceImpl implements BonCommandeService {

    private BonCommandeRepository bonCommandeRepository;

    @Override
    public BonCommande creer(BonCommande bonCommande) {
        return bonCommandeRepository.save(bonCommande);
    }

    @Override
    public List<BonCommande> lire() {
        return bonCommandeRepository.findAll();
    }

    @Override
    public String supprimer(long id) {
        bonCommandeRepository.deleteById(id);
        return "bon de commande supprimé !";
    }

    // Ajoutez d'autres méthodes si nécessaire
}
