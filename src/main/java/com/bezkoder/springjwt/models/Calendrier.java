package com.bezkoder.springjwt.models;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "CALENDRIER")
@Getter
@Setter
@NoArgsConstructor
public class Calendrier {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idcalendier;

    private String title;

    private Date start;

    private Date end;
}
