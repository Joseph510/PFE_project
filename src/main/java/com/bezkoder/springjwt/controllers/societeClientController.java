package com.bezkoder.springjwt.controllers;

import com.bezkoder.springjwt.models.societeClient;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import com.bezkoder.springjwt.security.services.societeClientService;
import java.util.List;

@RestController
@RequestMapping("/societeClient")
@AllArgsConstructor
@CrossOrigin

public class societeClientController {
    private final societeClientService societeClientService;

    @PostMapping("/create")
    public societeClient create(@RequestBody societeClient societeClient){
        return  societeClientService.creer(societeClient);
    }

    @GetMapping("/read")
    public List<societeClient> read() {
        return societeClientService.lire();
    }
    @GetMapping("/read/{id}")
    public societeClient read(@PathVariable long id, @RequestBody societeClient societeClient){
        return societeClientService.lire(id);
    }
    @PutMapping("/update/{id}")
    public societeClient update(@PathVariable Long id, @RequestBody societeClient societeClient){
        return societeClientService.modifier(id, societeClient);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable Long id) {
        return societeClientService.supprimer(id);
    }
}
