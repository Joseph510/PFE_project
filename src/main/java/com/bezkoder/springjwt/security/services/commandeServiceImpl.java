package com.bezkoder.springjwt.security.services;


import com.bezkoder.springjwt.models.Produit;
import com.bezkoder.springjwt.models.commande;
import com.bezkoder.springjwt.repository.ProduitRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bezkoder.springjwt.repository.commandeRepository;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
@Service
@AllArgsConstructor
public class commandeServiceImpl  implements commandeService{


        private final commandeRepository commandeRepository;
        private final ProduitRepository produitRepository;

    @Autowired
    private ProduitService produitService;


        @Override
        public List<commande> lire() {
            return commandeRepository.findAll();
        }

        @Override
        public commande modifier(long id, commande commande) {
            return commandeRepository.findById(id).map(c-> {
                c.setNom(commande.getNom());
                c.setTel(commande.getTel());
                c.setEmail(commande.getEmail());
                c.setPrix(commande.getPrix());
                c.setQuantité(commande.getQuantité());
                // Format the date as yyyy-mm-dd
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
                LocalDate formattedDate = LocalDate.parse(commande.getDate(), formatter);
                c.setDate(String.valueOf(formattedDate));
                c.setDevise(commande.getDevise());
                c.setTva(commande.getTva());
                c.setMontantlivraison(commande.getMontantlivraison());
                return commandeRepository.save(c);
            }).orElseThrow(() -> new RuntimeException("Commande non trouvé !"));
        }

        @Override
        public String supprimer(long id) {
            commandeRepository.deleteById(id);
            return "commande supprimé!";
        }

    @Override
    public commande creer(commande commande) {
        return commandeRepository.save(commande);
    }


}

