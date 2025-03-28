package com.api.rest.tienda.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "modelos")
public class Modelos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, length = 50)
    private String nombre;

    @ManyToOne
    @JoinColumn(name = "id_marca", referencedColumnName = "id")
    private Marcas marca;

}
