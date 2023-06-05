package com.bezkoder.springjwt.models;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="commande")
@Getter
@Setter
@NoArgsConstructor

public class commande {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nom;
    private String tel;
    private String email;
    private Float prix;
    private Long quantité;
    private String date;
    private String devise;
    private Long tva;
    private Float montantlivraison;






}


