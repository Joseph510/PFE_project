package com.bezkoder.springjwt.models;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="client")
@Getter
@Setter
@NoArgsConstructor
public class client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column (length = 50)
    private String Nom ;
    private String Prenom;
    @Column (length = 50)
    private String Email;
    private String Rôle;
    private String tel;




}
