package com.bezkoder.springjwt.security.services;


import com.bezkoder.springjwt.models.BonLivraison;
import com.bezkoder.springjwt.repository.BonLivraisonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BonLivraisonServiceImpl implements BonLivraisonService {

    @Autowired
    private BonLivraisonRepository bonLivraisonRepository;

    @Override
    public BonLivraison getBonLivraisonById(Long id) {
        Optional<BonLivraison> bonLivraisonOptional = bonLivraisonRepository.findById(id);
        return bonLivraisonOptional.orElse(null);
    }

    @Override
    public List<BonLivraison> getAllBonLivraisons() {
        return bonLivraisonRepository.findAll();
    }

    @Override
    public BonLivraison createBonLivraison(BonLivraison bonLivraison) {
        return bonLivraisonRepository.save(bonLivraison);
    }

    @Override
    public BonLivraison updateBonLivraison(Long id, BonLivraison bonLivraison) {
        bonLivraison.setId(id);
        return bonLivraisonRepository.save(bonLivraison);
    }

    @Override
    public void deleteBonLivraison(Long id) {
        bonLivraisonRepository.deleteById(id);
    }
}
