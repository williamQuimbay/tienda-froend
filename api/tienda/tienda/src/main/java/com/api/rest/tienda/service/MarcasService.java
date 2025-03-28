package com.api.rest.tienda.service;

import com.api.rest.tienda.models.Marcas;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface MarcasService {

    ResponseEntity<Marcas>crearMarcas(Marcas marcas);

    ResponseEntity<List<Marcas>>obtenerMarcas();

    ResponseEntity<Marcas>obtenerMarcaById(int id);

    ResponseEntity<Marcas>modificarMarcaById(Marcas request, int id);

    Boolean eliminarMarca(int id);

}
