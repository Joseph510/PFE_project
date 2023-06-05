package com.bezkoder.springjwt.models;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="BonLivraison")
@Getter
@Setter
@NoArgsConstructor

public class BonLivraison {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nomsociete;
    private String adresse;
    private String tel;

    private String email;
    private String destinataire;
    private String adressedestinataire;

    private Long numbonlivraison;
    private Long numcommande;

    private Long numclient;

    private Long telclient;

    private  String referenceproduit;

    private Long quantite;

    private Long prixunite;
}
