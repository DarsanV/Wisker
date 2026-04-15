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
<<<<<<< HEAD
    public List<wiskermod> getall(
            @RequestParam(required = false) Boolean completed,
            @RequestParam(required = false) String query
    ){
        return service.getall(completed, query);
=======
    public List<wiskermod> getall(){
        return service.getall();
>>>>>>> 9a92dce10ece282b3b94ebd34df93cda675d1608
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
