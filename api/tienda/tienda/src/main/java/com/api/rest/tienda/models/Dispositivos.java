package com.api.rest.tienda.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "dispositivos")
public class Dispositivos {

    @JsonProperty
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @JsonProperty
    @Column(nullable = false, length = 50)
    private String tipo;

    @JsonProperty
    @Column(nullable = false, length = 50)
    private String marca;

    @JsonProperty
    @Column(nullable = false, length = 50)
    private String modelo;

    @JsonProperty
    @Column(length = 50)
    private String almacenamiento;

    @JsonProperty
    @Column(length = 50)
    private String ram;

    @JsonProperty
    @Column(length = 50)
    private String procesador;

    @JsonProperty
    @Column(length = 50)
    private String pantalla;

    @JsonProperty
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal precio;

    @JsonProperty
    @Column(name = "url_imagen")
    private String urlImagen;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getAlmacenamiento() {
        return almacenamiento;
    }

    public void setAlmacenamiento(String almacenamiento) {
        this.almacenamiento = almacenamiento;
    }

    public String getRam() {
        return ram;
    }

    public void setRam(String ram) {
        this.ram = ram;
    }

    public String getProcesador() {
        return procesador;
    }

    public void setProcesador(String procesador) {
        this.procesador = procesador;
    }

    public String getPantalla() {
        return pantalla;
    }

    public void setPantalla(String pantalla) {
        this.pantalla = pantalla;
    }

    public BigDecimal getPrecio() {
        return precio;
    }

    public void setPrecio(BigDecimal precio) {
        this.precio = precio;
    }

    public String getUrlImagen() {
        return urlImagen;
    }

    public void setUrlImagen(String urlImagen) {
        this.urlImagen = urlImagen;
    }
}
