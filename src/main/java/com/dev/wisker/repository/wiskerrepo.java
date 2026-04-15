package com.dev.wisker.repository;

import com.dev.wisker.model.wiskermod;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface wiskerrepo extends JpaRepository<wiskermod,Long> {
    List<wiskermod> findByCompleted(boolean completed);

    List<wiskermod> findByTitleContainingIgnoreCaseOrDescriptionContainingIgnoreCase(String titleQuery, String descriptionQuery);
}
