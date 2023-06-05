package com.bezkoder.springjwt.security.services;

import com.bezkoder.springjwt.models.User;
import com.bezkoder.springjwt.payload.request.SignupRequest;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface Myservice {
    void register(SignupRequest signUpRequest);
    ResponseEntity<List<User>> getAllUsers();

    ResponseEntity<User> getUserById(Long id);

    ResponseEntity<User> updateUser(Long id, User updatedUser);

    ResponseEntity<?> deleteUser(Long id);
}
