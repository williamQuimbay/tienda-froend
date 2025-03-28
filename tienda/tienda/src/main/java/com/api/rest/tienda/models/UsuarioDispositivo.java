package com.api.rest.tienda.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "usuario_dispositivos")
public class UsuarioDispositivo {

    @Id
    @JsonProperty
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;


    @ManyToOne
    @JoinColumn(name = "id_usuario", referencedColumnName = "id")
    private Usuarios usuarios;

    @ManyToOne
    @JoinColumn(name = "id_dispositivo", referencedColumnName = "id")
    private Dispositivos dispositivos;

}
