package com.bezkoder.springjwt.security.services;


import com.bezkoder.springjwt.models.societeClient;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.bezkoder.springjwt.repository.societeClientRepository;
import java.util.List;

@Service
@AllArgsConstructor
public class societeClientServiceImpl implements societeClientService{

    private final societeClientRepository societeClientRepository;
    @Override
    public societeClient creer(societeClient societeClient) {
        // TODO Auto-generated method stub
        return societeClientRepository.save(societeClient);
    }

    @Override
    public List<societeClient> lire() {
        // TODO Auto-generated method stub
        return societeClientRepository.findAll();
    }
    @Override
    public societeClient lire(long id){
        return societeClientRepository.findById(id).orElseThrow(() -> new RuntimeException("soc non trv"));

    }
    @Override
    public societeClient modifier(long id, societeClient societeClient) {
        // TODO Auto-generated method stub
        return societeClientRepository.findById(id)
                .map(p->{
                    p.setNom(societeClient.getNom());
                    p.setEtat(societeClient.getEtat());
                    p.setDate(societeClient.getDate());
                    p.setRib(societeClient.getRib());
                    p.setAdresse(societeClient.getAdresse());
                    p.setTel(societeClient.getTel());
                    p.setFax(societeClient.getFax());
                    p.setEmail(societeClient.getEmail());
                    return societeClientRepository.save(p);

                } ).orElseThrow(() -> new RuntimeException("Produit non trouvé"));
    }

    @Override
    public String supprimer(long id) {

        societeClientRepository.deleteById(id);
        return "produit supprimé";
    }

}
