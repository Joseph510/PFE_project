package com.bezkoder.springjwt.models;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="Produit")
@Getter
@Setter
@NoArgsConstructor
public class Produit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(length = 50)
    private String type;
    @Column(length = 50)
    private String titre;
    private String référence;
    private String unité;
    private Long stock;
    private Integer marge_de_bénéfice;
    private Integer marge_de_bénéfice2;
    private Integer prix_de_base;
    private Integer prix_final_H;
    private String fournisseur;
    private String etat;
    private String catégorie;
    private long code_a_barre;

    @OneToMany(mappedBy = "produit", cascade = CascadeType.ALL ,fetch = FetchType.EAGER)
    private List<ImageProduit> images = new ArrayList<>();


}
