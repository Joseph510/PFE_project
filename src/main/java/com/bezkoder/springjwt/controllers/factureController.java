package com.bezkoder.springjwt.controllers;


import com.bezkoder.springjwt.models.facture;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import com.bezkoder.springjwt.security.services.factureService;
import java.util.List;
@RestController
@RequestMapping("/facture")
@AllArgsConstructor
@CrossOrigin

public class factureController {
    private final factureService factureService;

    @PostMapping("/create")
    public facture create(@RequestBody facture facture){
        System.out.println("facture creation");
        return  factureService.creer(facture);
    }

    @GetMapping("/read")
    public List<facture> read() {
        return factureService.lire();
    }
    @PutMapping("/update/{id}")
    public facture update(@PathVariable Long id, @RequestBody facture facture ){
        return factureService.modifier(id, facture);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable Long id) {
        return factureService.supprimer(id);
    }

}
