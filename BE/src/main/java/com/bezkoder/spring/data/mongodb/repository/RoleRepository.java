package com.bezkoder.spring.data.mongodb.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.bezkoder.spring.data.mongodb.model.Role;
import com.bezkoder.spring.data.mongodb.model.ERole;


public interface RoleRepository extends MongoRepository<Role, String> {
    Optional<Role> findByName(ERole name);
}