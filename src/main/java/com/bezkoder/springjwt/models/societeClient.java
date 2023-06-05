package com.bezkoder.springjwt.models;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="societeClient")
@Getter
@Setter
@NoArgsConstructor
public class societeClient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(length = 50)
    private String nom ;
    @Column (length = 50)
    private String etat;
    private String rib;
    private String adresse;
    private String tel;
    private String fax;
    private String Email;
    private String Date;
}
