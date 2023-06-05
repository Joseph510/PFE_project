package com.bezkoder.springjwt.repository;


import com.bezkoder.springjwt.models.client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface clientRepository extends JpaRepository<client, Long> {
}
