package com.api.rest.tienda.service;

import com.api.rest.tienda.models.Usuarios;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface UsuarioService {

    ResponseEntity<List<Usuarios>>obtenerUsuarios();

    ResponseEntity<Usuarios>crearUsuarios(Usuarios usuarios);

    ResponseEntity<Optional<Usuarios>>consultarusuarioById(int id);

    ResponseEntity<Usuarios>modificarUsuario(Usuarios request, int id);

    Boolean eliminarUsuarioById(int id);


}
