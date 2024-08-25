package com.project.apukeeper.service;


import com.project.apukeeper.model.User;
import com.project.apukeeper.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public User save(User user){
        return userRepository.save(user);
    }

    @Override
    public User getUserById(Long id){
        return userRepository.getReferenceById(id);
    }

}
