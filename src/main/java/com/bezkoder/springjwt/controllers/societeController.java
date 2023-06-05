package com.bezkoder.springjwt.controllers;


import com.bezkoder.springjwt.models.societe;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import com.bezkoder.springjwt.security.services.societeService;
import java.util.List;

@RestController
@RequestMapping("/societe")
@AllArgsConstructor
@CrossOrigin
public class societeController {

    private final societeService societeService;

    @PostMapping("/create")
    public societe create(@RequestBody societe societe){
        return  societeService.creer(societe);
    }

    @GetMapping("/read")
    public List<societe> read() {
        return societeService.lire();
    }
    @GetMapping("/read/{id}")
    public societe read(@PathVariable long id, @RequestBody societe societe){
        return societeService.lire(id);
    }
    @PutMapping("/update/{id}")
    public societe update(@PathVariable Long id, @RequestBody societe societe){
        return societeService.modifier(id, societe);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable Long id) {
        return societeService.supprimer(id);
    }
}

