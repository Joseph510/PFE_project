package com.bezkoder.springjwt.security.services;


import com.bezkoder.springjwt.models.client;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.bezkoder.springjwt.repository.clientRepository;
import java.util.List;

@Service
@AllArgsConstructor
public class clientServiceImpl implements clientService{

    private final clientRepository clientRepository;
    @Override
    public client creer(client client) {
        // TODO Auto-generated method stub
        return clientRepository.save(client);
    }



    @Override
    public List<client> lire() {
        // TODO Auto-generated method stub
        return clientRepository.findAll();
    }

    @Override
    public client modifier(long id, client client) {
        // TODO Auto-generated method stub
        return clientRepository.findById(id)
                .map(p->{
                    p.setNom(client.getNom());
                    p.setEmail(client.getEmail());
                    p.setRôle(client.getRôle());
                    p.setPrenom(client.getPrenom());
                    p.setTel(client.getTel());




                    return clientRepository.save(p);

                } ).orElseThrow(() -> new RuntimeException("client non trouvé"));
    }

    @Override
    public String supprimer(long id) {

        clientRepository.deleteById(id);
        return "client supprimé";
    }
}
