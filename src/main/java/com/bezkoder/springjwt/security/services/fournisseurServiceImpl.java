package com.bezkoder.springjwt.security.services;


import com.bezkoder.springjwt.models.fournisseur;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.bezkoder.springjwt.repository.fournisseurRepository;
import java.util.List;

@Service
@AllArgsConstructor

public class fournisseurServiceImpl implements fournisseurService {

    private final fournisseurRepository fournisseurRepository;
    @Override
    public fournisseur creer(fournisseur fournisseur) {
        // TODO Auto-generated method stub
        return fournisseurRepository.save(fournisseur);
    }



    @Override
    public List<fournisseur> lire() {
        // TODO Auto-generated method stub
        return fournisseurRepository.findAll();
    }

    @Override
    public fournisseur modifier(long id, fournisseur fournisseur) {
        // TODO Auto-generated method stub
        return fournisseurRepository.findById(id)
                .map(p->{
                    p.setNom(fournisseur.getNom());
                    p.setEtat(fournisseur.getEtat());
                    p.setRib(fournisseur.getRib());
                    p.setAdresse(fournisseur.getAdresse());
                    p.setDate(fournisseur.getDate());
                    p.setPrenom(fournisseur.getPrenom());
                    p.setEmail(fournisseur.getEmail());
                    p.setTel(fournisseur.getTel());
                    p.setMatricule_fiscale(fournisseur.getMatricule_fiscale());




                    return fournisseurRepository.save(p);

                } ).orElseThrow(() -> new RuntimeException("client non trouvé"));
    }

    @Override
    public String supprimer(long id) {

        fournisseurRepository.deleteById(id);
        return "client supprimé";
    }
}
