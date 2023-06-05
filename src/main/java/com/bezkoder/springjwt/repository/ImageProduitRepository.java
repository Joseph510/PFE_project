package com.bezkoder.springjwt.repository;

import com.bezkoder.springjwt.models.ImageProduit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageProduitRepository extends JpaRepository<ImageProduit, Long> {
    ImageProduit findByProduitId(Long productId);
}
