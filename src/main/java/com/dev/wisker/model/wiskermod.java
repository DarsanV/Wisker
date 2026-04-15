package com.dev.wisker.model;

<<<<<<< HEAD
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.Column;
=======
>>>>>>> 9a92dce10ece282b3b94ebd34df93cda675d1608
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
<<<<<<< HEAD
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;

import java.time.LocalDate;
import java.time.LocalDateTime;
=======
import org.springframework.boot.autoconfigure.web.WebProperties;
>>>>>>> 9a92dce10ece282b3b94ebd34df93cda675d1608

@Entity
public class wiskermod {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
<<<<<<< HEAD
    private Long id;

    @Column(nullable = false, length = 120)
    private String title;
    @Column(length = 500)
    private String description;
    private boolean completed = false;

    @Column(length = 20, nullable = false)
    private String priority = "MEDIUM";

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dueDate;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Column(nullable = false)
    private LocalDateTime updatedAt;
=======
    private long id ;
    private String title;
    private String descrip;
    private boolean completed = false ;
>>>>>>> 9a92dce10ece282b3b94ebd34df93cda675d1608

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

<<<<<<< HEAD
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
=======
    public String getDescription() { return descrip; }
    public void setDescription(String description) { this.descrip = description; }
>>>>>>> 9a92dce10ece282b3b94ebd34df93cda675d1608

    public boolean isCompleted() { return completed; }
    public void setCompleted(boolean completed) { this.completed = completed; }

<<<<<<< HEAD
    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }

    public void setDueDate(LocalDate dueDate) {
        this.dueDate = dueDate;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    @PrePersist
    public void prePersist() {
        LocalDateTime now = LocalDateTime.now();
        this.createdAt = now;
        this.updatedAt = now;
    }

    @PreUpdate
    public void preUpdate() {
        this.updatedAt = LocalDateTime.now();
    }
=======
>>>>>>> 9a92dce10ece282b3b94ebd34df93cda675d1608
}


