package com.bezkoder.springjwt.models;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;


@Entity
@Table(name="facture")
@Getter
@Setter
@NoArgsConstructor
public class facture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Float timbrefiscal;

    private Long numerodebut;

    private String adresse;

    private String email;

    private String tel;

    private String tvatitre;

    private String modelivraison;

    private String reglementVirement;

    private String dateReglement;

    private String validiteOffre;

    private String delaiLivraison;

    private String titre;

    private String devisecommande;

    private Integer tva;

    private Long montantlivraison;


}
