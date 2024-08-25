package com.project.apukeeper.service;

import com.project.apukeeper.model.Keep;
import java.util.List;

public interface KeepService {
    List<Keep> findAll();

    Keep keepSave(Keep keep);
}
