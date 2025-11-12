package com.dev.wisker.controller;

import com.dev.wisker.model.wiskermod;
import com.dev.wisker.service.wiskerservice;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/wisker")
@CrossOrigin("*")
public class wiskercontroller {
    private final wiskerservice service;

    public wiskercontroller (wiskerservice service)
    {
        this.service = service ;
    }

    @GetMapping
    public List<wiskermod> getall(){
        return service.getall();
    }

    @GetMapping ("/{id}")
    public wiskermod getById(@PathVariable Long id)
    {
        return service.getById(id);
    }

    @PostMapping
    public wiskermod create(@RequestBody wiskermod mod)
    {
        return service.create(mod);
    }


    @PutMapping("/{id}")
    public wiskermod update(@PathVariable Long id , @RequestBody wiskermod mod)
    {
        return service.update(id, mod);
    }


    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id)
    {
        service.delete(id);
    }
}
