package com.bezkoder.springjwt.controllers;


import com.bezkoder.springjwt.models.fournisseur;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import com.bezkoder.springjwt.security.services.fournisseurService;
import java.util.List;
@RestController
@RequestMapping("/fournisseur")
@AllArgsConstructor
@CrossOrigin

public class fournisseurController {
    private final fournisseurService fournisseurService;

    @PostMapping("/create")
    public fournisseur create(@RequestBody fournisseur fournisseur){
        return  fournisseurService.creer(fournisseur);
    }

    @GetMapping("/read")
    public List<fournisseur> read() {
        return fournisseurService.lire();
    }
    @PutMapping("/update/{id}")
    public fournisseur update(@PathVariable Long id, @RequestBody fournisseur fournisseur ){
        return fournisseurService.modifier(id, fournisseur);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable Long id) {
        return fournisseurService.supprimer(id);
    }

}
