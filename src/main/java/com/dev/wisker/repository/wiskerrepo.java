package com.dev.wisker.repository;

import com.dev.wisker.model.wiskermod;
import org.springframework.data.jpa.repository.JpaRepository;

<<<<<<< HEAD
import java.util.List;

public interface wiskerrepo extends JpaRepository<wiskermod,Long> {
    List<wiskermod> findByCompleted(boolean completed);

    List<wiskermod> findByTitleContainingIgnoreCaseOrDescriptionContainingIgnoreCase(String titleQuery, String descriptionQuery);
=======
public interface wiskerrepo extends JpaRepository<wiskermod,Long> {
>>>>>>> 9a92dce10ece282b3b94ebd34df93cda675d1608
}
