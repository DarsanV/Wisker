package com.dev.wisker.service;

import com.dev.wisker.model.wiskermod;
import com.dev.wisker.repository.wiskerrepo;
<<<<<<< HEAD
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Locale;
=======
import org.springframework.stereotype.Service;
import java.util.List;
>>>>>>> 9a92dce10ece282b3b94ebd34df93cda675d1608

@Service
public class wiskerservice {
    private final wiskerrepo repo ;

    public wiskerservice(wiskerrepo repo)
    {
        this.repo = repo ;
    }

<<<<<<< HEAD
    public List<wiskermod> getall(Boolean completed, String query) {
        if (query != null && !query.isBlank()) {
            String cleanQuery = query.trim();
            return repo.findByTitleContainingIgnoreCaseOrDescriptionContainingIgnoreCase(cleanQuery, cleanQuery);
        }
        if (completed != null) {
            return repo.findByCompleted(completed);
        }
        return repo.findAll();
    }

    public wiskermod getById(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Task not found for id " + id));
    }

    public wiskermod create(wiskermod mod) {
        sanitizeInput(mod);
        return repo.save(mod);
    }

    public wiskermod update(Long id, wiskermod updatedmod) {
        wiskermod exist = getById(id);
        exist.setTitle(updatedmod.getTitle());
        exist.setDescription(updatedmod.getDescription());
        exist.setCompleted(updatedmod.isCompleted());
        exist.setPriority(updatedmod.getPriority());
        exist.setDueDate(updatedmod.getDueDate());
        sanitizeInput(exist);
        return repo.save(exist);
    }

    public void delete(Long id) {
        if (!repo.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Task not found for id " + id);
        }
        repo.deleteById(id);
    }

    private void sanitizeInput(wiskermod mod) {
        if (mod.getTitle() == null || mod.getTitle().trim().isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Title is required");
        }
        mod.setTitle(mod.getTitle().trim());

        if (mod.getDescription() != null) {
            mod.setDescription(mod.getDescription().trim());
        }

        String priority = mod.getPriority();
        if (priority == null || priority.isBlank()) {
            mod.setPriority("MEDIUM");
            return;
        }

        String normalized = priority.trim().toUpperCase(Locale.ROOT);
        if (!normalized.equals("LOW") && !normalized.equals("MEDIUM") && !normalized.equals("HIGH")) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Priority must be LOW, MEDIUM, or HIGH");
        }
        mod.setPriority(normalized);
    }
=======
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

>>>>>>> 9a92dce10ece282b3b94ebd34df93cda675d1608

}
