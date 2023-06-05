package com.bezkoder.springjwt.security.services;

import antlr.BaseAST;
import com.bezkoder.springjwt.models.ERole;
import com.bezkoder.springjwt.models.Role;
import com.bezkoder.springjwt.models.User;
import com.bezkoder.springjwt.payload.request.SignupRequest;
import com.bezkoder.springjwt.repository.RoleRepository;
import com.bezkoder.springjwt.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

public class MyserviceImpl implements Myservice{
    private final UserRepository userRepository;
     RoleRepository roleRepository;

     PasswordEncoder encoder;
    public MyserviceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void register(SignupRequest signUpRequest) {
        String username = signUpRequest.getUsername();
        String email = signUpRequest.getEmail();
        String password = signUpRequest.getPassword();

        // Create new user's account

        User user = new User( username, email, encoder.encode(password) );



        Set<String> strRoles= signUpRequest.getRole();
        Set<Role> roles = new HashSet<>();

        // assign roles
        if (strRoles == null) {
            throw new RuntimeException("Error: Role is not found.");
        } else {
            strRoles.forEach(role -> {
                switch (role) {
                    case "admin":
                        Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                                .orElseThrow(() -> new RuntimeException("Error: ADMIN Role is not found."));
                        roles.add(adminRole);

                        break;
                    case "USER":
                        Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                                .orElseThrow(() -> new RuntimeException("Error: USER Role is not found."));
                        roles.add(userRole);

                        break;
                    default:
                        throw new RuntimeException("Error: Invalid Role.");
                }
            });
        }

        user.setRoles(roles);

        userRepository.save(user);}

    @Override
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userRepository.findAll();
        return ResponseEntity.ok(users);
    }

    @Override
    public ResponseEntity<User> getUserById(Long id) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @Override
    public ResponseEntity<User> updateUser(Long id, User updatedUser) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            // Update the user object with the new values
            user.setUsername(updatedUser.getUsername());
            user.setEmail(updatedUser.getEmail());
            // Set other properties that you want to update

            User savedUser = userRepository.save(user);
            return ResponseEntity.ok(savedUser);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @Override
    public ResponseEntity<?> deleteUser(Long id) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            userRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
