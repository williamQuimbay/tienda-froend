package com.api.rest.tienda.models;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "especificaciones")
public class Especificaciones {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "id_dispositivo", referencedColumnName = "id")
    private Dispositivos dispositivo;

    @Column(length = 50)
    private String almacenamiento;

    @Column(length = 50)
    private String ram;

    @Column(length = 50)
    private String procesador;

    @Column(length = 50)
    private String pantalla;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal precio;

}
