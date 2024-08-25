package com.project.apukeeper.service;

import com.project.apukeeper.model.User;

import java.util.List;

public interface UserService {
    List<User> findAll();

    User save(User user);

    User getUserById(Long id);
}
