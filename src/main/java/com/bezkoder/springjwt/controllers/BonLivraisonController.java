package com.bezkoder.springjwt.controllers;


import com.bezkoder.springjwt.models.BonLivraison;
import com.bezkoder.springjwt.security.services.BonLivraisonService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/bonlivraisons")
@AllArgsConstructor
public class BonLivraisonController {

    @Autowired
    private BonLivraisonService bonLivraisonService;

    @GetMapping("/read/{id}")
    public BonLivraison getBonLivraisonById(@PathVariable("id") Long id) {
        return bonLivraisonService.getBonLivraisonById(id);
    }

    @GetMapping("/read")
    public List<BonLivraison> getAllBonLivraisons() {
        return bonLivraisonService.getAllBonLivraisons();
    }

    @PostMapping("/create")
    public BonLivraison createBonLivraison(@RequestBody BonLivraison bonLivraison) {
        return bonLivraisonService.createBonLivraison(bonLivraison);
    }

    @PutMapping("/update/{id}")
    public BonLivraison updateBonLivraison(@PathVariable("id") Long id, @RequestBody BonLivraison bonLivraison) {
        return bonLivraisonService.updateBonLivraison(id, bonLivraison);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteBonLivraison(@PathVariable("id") Long id) {
        bonLivraisonService.deleteBonLivraison(id);
    }
}
