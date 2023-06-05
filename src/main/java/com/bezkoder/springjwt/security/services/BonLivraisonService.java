package com.bezkoder.springjwt.security.services;



import com.bezkoder.springjwt.models.BonLivraison;

import java.util.List;

public interface BonLivraisonService {
    BonLivraison getBonLivraisonById(Long id);
    List<BonLivraison> getAllBonLivraisons();
    BonLivraison createBonLivraison(BonLivraison bonLivraison);
    BonLivraison updateBonLivraison(Long id, BonLivraison bonLivraison);
    void deleteBonLivraison(Long id);
}
