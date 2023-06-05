package com.bezkoder.springjwt.security.services;

import com.bezkoder.springjwt.models.ImageProduit;
import com.bezkoder.springjwt.repository.ImageProduitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImageProduitService {

    private final ImageProduitRepository imageProduitRepository;

    @Autowired
    public ImageProduitService(ImageProduitRepository imageProduitRepository) {
        this.imageProduitRepository = imageProduitRepository;
    }

    public ImageProduit getProductImagesByProductId(Long productId) {
        return imageProduitRepository.findByProduitId(productId);
    }
}