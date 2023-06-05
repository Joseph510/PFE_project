package com.bezkoder.springjwt.controllers;

import com.bezkoder.springjwt.models.Produit;
import com.bezkoder.springjwt.models.commande;
import com.bezkoder.springjwt.models.fournisseur;
import com.bezkoder.springjwt.security.services.ProduitService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.bezkoder.springjwt.security.services.commandeService;
import java.util.List;
@RestController
@CrossOrigin
@RequestMapping("/commande")
@AllArgsConstructor
public class commandeController {
        private final commandeService commandeService;


        @PostMapping("/create")
        public commande create(@RequestBody commande commande){
                return  commandeService.creer(commande);
        }


        @GetMapping("/read")
        public List<commande> read() {
            return commandeService.lire();
        }
        @PutMapping("/update/{id}")
        public commande update(@PathVariable Long id,@RequestBody commande commande) {
            return commandeService.modifier(id, commande);
        }
        @DeleteMapping("/delete/{id}")
        public  String delete(@PathVariable Long id) {
            return  commandeService.supprimer(id);
        }







}
