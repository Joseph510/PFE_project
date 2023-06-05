package com.bezkoder.springjwt.security.services;


import com.bezkoder.springjwt.models.facture;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.bezkoder.springjwt.repository.factureRepository;
import java.util.List;

@Service
@AllArgsConstructor
public class factureServiceImpl implements factureService {

    private final factureRepository factureRepository;
    @Override
    public facture creer(facture facture) {
        // TODO Auto-generated method stub
        return factureRepository.save(facture);
    }



    @Override
    public List<facture> lire() {
        // TODO Auto-generated method stub
        return factureRepository.findAll();
    }

    @Override
    public facture modifier(long id, facture facture) {
        // TODO Auto-generated method stub
        return factureRepository.findById(id)
                .map(p->{
                    p.setTimbrefiscal(facture.getTimbrefiscal());
                    p.setNumerodebut(facture.getNumerodebut());
                    p.setAdresse(facture.getAdresse());
                    p.setEmail(facture.getEmail());
                    p.setTvatitre(facture.getTvatitre());
                    p.setTel(facture.getTel());
                    p.setModelivraison(facture.getModelivraison());
                    p.setReglementVirement(facture.getReglementVirement());
                    p.setDateReglement(facture.getDateReglement());
                    p.setValiditeOffre(facture.getValiditeOffre());
                    p.setTitre(facture.getTitre());
                    p.setDelaiLivraison(facture.getDelaiLivraison());
                    p.setDevisecommande(facture.getDevisecommande());
                    p.setTva(facture.getTva());
                    p.setMontantlivraison(facture.getMontantlivraison());




                    return factureRepository.save(p);

                } ).orElseThrow(() -> new RuntimeException("info non trouvé"));
    }

    @Override
    public String supprimer(long id) {

        factureRepository.deleteById(id);
        return "facture supprimé";
    }
}
