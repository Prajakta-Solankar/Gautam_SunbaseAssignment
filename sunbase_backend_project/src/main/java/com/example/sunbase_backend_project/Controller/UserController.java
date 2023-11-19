package com.example.sunbase_backend_project.Controller;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.sunbase_backend_project.Model.User;
import com.example.sunbase_backend_project.Repo.UserRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/createUser")
    public ResponseEntity<?> createUser(@RequestBody User user) {
        User result = this.userRepository.save(user);
        return ResponseEntity.ok(result);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
        Optional<User> result = userRepository.findById(user.getEmail());
        // now what I need here is important to know.
        if(result != null){
            System.out.println();
            System.out.println();
            System.out.println();
            System.out.println();
            System.out.println("this is what I am getting ");
            System.out.println(result);
        }
        return ResponseEntity.ok(result);
    }

}

