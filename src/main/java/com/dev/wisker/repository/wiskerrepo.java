package com.dev.wisker.repository;

import com.dev.wisker.model.wiskermod;
import org.springframework.data.jpa.repository.JpaRepository;

public interface wiskerrepo extends JpaRepository<wiskermod,Long> {
}
