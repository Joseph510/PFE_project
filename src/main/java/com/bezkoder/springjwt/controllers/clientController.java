package com.bezkoder.springjwt.controllers;


import com.bezkoder.springjwt.models.client;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import com.bezkoder.springjwt.security.services.clientService;
import java.util.List;
@RestController
@RequestMapping("/client")
@AllArgsConstructor
@CrossOrigin

public class clientController {
    private final clientService clientService;

    @PostMapping("/create")
    public client create(@RequestBody client client){
        return  clientService.creer(client);
    }

    @GetMapping("/read")
    public List<client> read() {
        return clientService.lire();
    }
    @PutMapping("/update/{id}")
    public client update(@PathVariable Long id, @RequestBody client client){
        return clientService.modifier(id, client);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable Long id ) {
        return clientService.supprimer(id);
    }

}
