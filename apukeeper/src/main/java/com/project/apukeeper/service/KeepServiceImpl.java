package com.project.apukeeper.service;


import com.project.apukeeper.model.Keep;
import com.project.apukeeper.repository.KeepRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KeepServiceImpl implements KeepService {

    @Autowired
    private KeepRepository keepRepository;

    @Override
    public List<Keep> findAll() {
        return keepRepository.findAll();
    }

    @Override
    public Keep keepSave(Keep keep) {
        return keepRepository.save(keep);
    }

}
