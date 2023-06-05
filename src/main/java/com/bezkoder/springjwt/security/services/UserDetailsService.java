package com.bezkoder.springjwt.security.services;

import com.bezkoder.springjwt.models.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
@Service

public interface UserDetailsService {
    UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;


}