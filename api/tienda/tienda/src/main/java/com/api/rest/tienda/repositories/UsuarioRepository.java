package com.api.rest.tienda.repositories;

import com.api.rest.tienda.models.Usuarios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UsuarioRepository extends JpaRepository<Usuarios, Integer> {

    @Query("SELECT u FROM Usuarios u")
    List<Usuarios> obtenerTodos();
}
