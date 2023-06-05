package com.bezkoder.springjwt.controllers;


import com.bezkoder.springjwt.models.ImageProduit;
import com.bezkoder.springjwt.models.Produit;
import com.bezkoder.springjwt.repository.ImageProduitRepository;
import com.bezkoder.springjwt.repository.ProduitRepository;
import com.bezkoder.springjwt.security.services.ImageProduitService;
import com.bezkoder.springjwt.security.services.ProduitServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import com.bezkoder.springjwt.security.services.ProduitService;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
@RequestMapping("/Produit")
@AllArgsConstructor
@CrossOrigin
public class ProduitController {

    private final ProduitService produitService;
    private final ImageProduitService imageProduitService;
    @Autowired
    public  ProduitController(ProduitService produitService, ImageProduitService imageProduitService) {
        this.produitService = produitService;
        this.imageProduitService = imageProduitService;
    }

    public String getFilenameByProductId(Long productId) {
        ImageProduit imageProduit = (ImageProduit) imageProduitRepository.findByProduitId(productId);
        if (imageProduit != null) {
            return imageProduit.getFileName();
        }
        return null;
    }
    @Autowired
    ProduitServiceImpl service;
    @Autowired
    ProduitRepository produitRepository;
    @Autowired
    ImageProduitRepository imageProduitRepository;

    @PostMapping("/create")
    public Produit create(@RequestBody Produit produit) throws IOException {
        return  service.save(produit);
    }

    @PostMapping(value = "/upload-images")
    public ResponseEntity<String> uploadImages(@RequestParam("myFiles") MultipartFile images) throws IOException {
        Produit produit = produitRepository.findById(getLastProductId()).get();
        Long myId = getLastProductId();
        try {
            // Create directories
            Files.createDirectories(Paths.get("src/main/files/" + myId));

            // Wait until the directory is created
            while (!Files.exists(Paths.get("src/main/files/" + myId))) {
                Thread.sleep(1000); // Wait for 1 second
            }


            try {
                byte[] imageData = images.getBytes();
                String fileName = images.getOriginalFilename();
                ImageProduit im1 = new ImageProduit();
                im1.setPath(fileName);
                im1.setProduit(produit);
                imageProduitRepository.save(im1);
                File file = new File("src/main/files/"+myId+"/" + fileName);
                FileOutputStream fos = new FileOutputStream(file);
                fos.write(imageData);
                fos.close();
                return ResponseEntity.ok("Images uploaded successfully");
            } catch (IOException e) {
                e.printStackTrace();
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload images");
            }

            // Directory has been created
        } catch (Exception e) {
            // Handle exception
            e.printStackTrace();
        }


        return null;
    }

    public Long getLastProductId() {
        Produit lastProduct = produitRepository.findFirstByOrderByIdDesc();
        if (lastProduct != null) {
            return lastProduct.getId();
        } else {
            return 1L;
        }
    }

    @GetMapping(value = "/getImage/{myId}/{fileName}", produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<byte[]> getImage(@PathVariable Long myId, @PathVariable String fileName) throws IOException {
        String imagePath = "src/main/files/" + myId + "/" + fileName;
        Path imageFile = Paths.get(imagePath);
        byte[] imageBytes = Files.readAllBytes(imageFile);

        return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(imageBytes);
    }


    @GetMapping("/read")
    public List<Produit> read() {
        return produitService.lire();
    }
    @GetMapping("/read/{id}")
    public Produit read(@PathVariable long id, @RequestBody Produit produit){
        return produitService.lire(id);
    }
    @PutMapping("/update/{id}")
    public Produit update(@PathVariable Long id, @RequestBody Produit produit){
        return produitService.modifier(id, produit);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable Long id) {
        return produitService.supprimer(id);
    }


    @PostMapping ("/rech/{titre}")
    public Produit rech(@PathVariable  String titre) {

        return  produitService.findBytitre(titre);
    }
}
