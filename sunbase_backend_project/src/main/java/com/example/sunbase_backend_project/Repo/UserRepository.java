package com.example.sunbase_backend_project.Repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.sunbase_backend_project.Model.User;

public interface UserRepository extends MongoRepository<User, String> {
    
}
