package com.bezkoder.springjwt.controllers;


import com.bezkoder.springjwt.models.Calendrier;
import com.bezkoder.springjwt.security.services.CalendrierService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/calendrier")
@AllArgsConstructor
public class CalendrierController {
    private final CalendrierService calendrierService;

    @PostMapping("/create")
    public Calendrier create(@RequestBody Calendrier calendrier) {
        return calendrierService.creerevent(calendrier);
    }
    @GetMapping("/read")
    public List<Calendrier> read() {

        return calendrierService.lire();
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable long id) {
        return calendrierService.deleteEvent(id);
    }
}
