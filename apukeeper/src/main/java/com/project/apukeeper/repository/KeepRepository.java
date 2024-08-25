package com.project.apukeeper.repository;

import com.project.apukeeper.model.Keep;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KeepRepository extends JpaRepository<Keep, Long> {
}
