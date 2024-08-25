package com.project.apukeeper.controller;


import com.project.apukeeper.model.Keep;
import com.project.apukeeper.model.User;
import com.project.apukeeper.service.KeepService;
import com.project.apukeeper.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/keeps")
public class KeepController {

    @Autowired
    private UserService userService;

    @Autowired
    private KeepService keepService;

    @PostMapping("")
    public ResponseEntity<Keep> createNewKeep(@RequestBody Keep keep) {
        User user = userService.getUserById(1L);
        Keep keepWithUser = new Keep(keep.getTitle(), keep.getParg(), user);
        return new ResponseEntity<>(keepService.keepSave(keepWithUser), HttpStatus.CREATED);
    }

}
