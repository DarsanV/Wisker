package com.dev.wisker.service;

import com.dev.wisker.model.wiskermod;
import com.dev.wisker.repository.wiskerrepo;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class wiskerservice {
    private final wiskerrepo repo ;

    public wiskerservice(wiskerrepo repo)
    {
        this.repo = repo ;
    }

    public List<wiskermod>getall()
    {
        return repo.findAll();
    }

    public wiskermod getById(Long id)
    {
        return repo.findById(id).orElse(null);
    }

    public wiskermod create(wiskermod mod){
        return repo.save(mod);
    }

    public wiskermod update(Long id , wiskermod updatedmod)
    {
        wiskermod exist = repo.findById(id).orElse(null);
        if(exist != null)
        {
            exist.setTitle(updatedmod.getTitle());
            exist.setDescription(updatedmod.getDescription());
            exist.setCompleted(updatedmod.isCompleted());
            return repo.save(exist);
        }

          return null;
    }

    public void delete(Long id)
    {
        repo.deleteById(id);
    }


}
