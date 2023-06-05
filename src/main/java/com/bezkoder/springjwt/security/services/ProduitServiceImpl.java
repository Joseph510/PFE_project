package com.bezkoder.springjwt.security.services;


import com.bezkoder.springjwt.models.Produit;
import com.bezkoder.springjwt.repository.ProduitRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ProduitServiceImpl implements ProduitService{

    private final ProduitRepository produitRepository;
    @Override
    public Produit creer(Produit produit) {
        // TODO Auto-generated method stub
        return produitRepository.save(produit);
    }

    @Override
    public List<Produit> lire() {
        // TODO Auto-generated method stub
        return produitRepository.findAll();
    }
    @Override
    public Produit lire(long id){
        return produitRepository.findById(id).orElseThrow(() -> new RuntimeException("Produit non trouvé"));

    }
    @Override
    public Produit modifier(long id, Produit produit) {
        // TODO Auto-generated method stub
        return produitRepository.findById(id)
                .map(p->{
                        p.setType(produit.getType());
                        p.setTitre(produit.getTitre());
                        p.setRéférence(produit.getRéférence());
                        p.setUnité(produit.getUnité());
                        p.setStock(produit.getStock());
                        p.setMarge_de_bénéfice(produit.getMarge_de_bénéfice());
                        p.setMarge_de_bénéfice2(produit.getMarge_de_bénéfice2());
                        p.setPrix_de_base(produit.getPrix_de_base());
                        p.setPrix_final_H(produit.getPrix_final_H());
                        p.setFournisseur(produit.getFournisseur());
                        p.setEtat(produit.getEtat());
                        p.setCatégorie(produit.getCatégorie());
                        p.setCode_a_barre(produit.getCode_a_barre());


                    return produitRepository.save(p);
                } ).orElseThrow(() -> new RuntimeException("Produit non trouvé"));
    }

    @Override
    public String supprimer(long id) {

        produitRepository.deleteById(id);
        return "produit supprimé";
    }

    @Override
    public Produit findBytitre(String titre) {
        return produitRepository.findBytitre(titre);
    }
    public Produit save(Produit produit)  {
        return produitRepository.save(produit);
    }
}
