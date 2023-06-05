package com.bezkoder.springjwt.security.services;


import com.bezkoder.springjwt.models.societe;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.bezkoder.springjwt.repository.societeRepository;
import java.util.List;

@Service
@AllArgsConstructor
public class societeServiceImpl implements societeService{

    private final societeRepository societeRepository;
    @Override
    public societe creer(societe societe) {
        // TODO Auto-generated method stub
        return societeRepository.save(societe);
    }




    @Override
    public List<societe> lire() {
        // TODO Auto-generated method stub
        return societeRepository.findAll();
    }

    @Override
    public societe lire(long id){
        return societeRepository.findById(id).orElseThrow(() -> new RuntimeException("soc non trv"));

    }
    @Override
    public societe modifier(long id, societe societe) {
        // TODO Auto-generated method stub
        return societeRepository.findById(id)
                .map(p->{
                    p.setNom(societe.getNom());
                    p.setEtat(societe.getEtat());
                    p.setDate(societe.getDate());
                    p.setRib(societe.getRib());
                    p.setAdresse(societe.getAdresse());
                    p.setTel(societe.getTel());
                    p.setFax(societe.getFax());
                    p.setEmail(societe.getEmail());
                    return societeRepository.save(p);

                } ).orElseThrow(() -> new RuntimeException("Produit non trouvé"));
    }

    @Override
    public String supprimer(long id) {

        societeRepository.deleteById(id);
        return "produit supprimé";
    }
}
