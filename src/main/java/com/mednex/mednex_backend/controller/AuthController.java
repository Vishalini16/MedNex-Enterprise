package com.mednex.backend.controller;

import com.mednex.backend.model.User;
import com.mednex.backend.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class AuthController {

    private final UserRepository repo;

    public AuthController(UserRepository repo) {
        this.repo = repo;
    }

    @PostMapping("/login")
    public User login(@RequestBody User user) {
        User dbUser = repo.findByEmail(user.getEmail());

        if (dbUser != null && dbUser.getPassword().equals(user.getPassword())) {
            return dbUser;
        }
        return null;
    }
}
