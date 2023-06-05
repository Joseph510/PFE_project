package com.bezkoder.springjwt.controllers;

import com.bezkoder.springjwt.models.BonCommande;
import com.bezkoder.springjwt.security.services.BonCommandeService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/BonCommande")
@AllArgsConstructor
@CrossOrigin

public class BonCommandeController {

    private BonCommandeService bonCommandeService;

    @GetMapping("/read")
    public List<BonCommande> read() {
        return bonCommandeService.lire();
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable Long id) {
        return bonCommandeService.supprimer(id);
    }

    @PostMapping
    public BonCommande creer(@RequestBody BonCommande bonCommande) {

        return bonCommandeService.creer(bonCommande);
    }


}

    // Autres méthodes du contrôleur pour les opérations CRUD (Create, Update)


