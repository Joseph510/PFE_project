package com.bezkoder.springjwt.models;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="fournisseur")
@Getter
@Setter
@NoArgsConstructor
public class fournisseur {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column (length = 50)
    private String Nom ;
    private String Prenom ;
    private String Email ;
    private String Tel ;

    @Column (length = 50)
    private String etat;
    private String rib;
    private String adresse;
    private String date;
    private Integer matricule_fiscale;


}
