package com.api.rest.tienda.controller;

import com.api.rest.tienda.models.Usuarios;
import com.api.rest.tienda.service.UsuarioService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/tienda")
public class UsuarioController {

    private Logger logger = LoggerFactory.getLogger(UsuarioController.class);

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping
    public ResponseEntity<List<Usuarios>> getUsuarios(){

        logger.debug("Inicia controlador...");
        return ResponseEntity.ok(usuarioService.obtenerUsuarios().getBody());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Usuarios>>getUsuarioById(@PathVariable Integer id){
        logger.debug("Inicia controlador de consulta de usuario por Id");

        return ResponseEntity.ok(usuarioService.consultarusuarioById(id)).getBody();
    }


    @PostMapping
    public ResponseEntity<Usuarios> postUsuarios(@RequestBody Usuarios usuarios){

        logger.debug("Inicia controlador Creacion de usuario");

        return ResponseEntity.ok(usuarioService.crearUsuarios(usuarios).getBody());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Usuarios>putUsuario(@RequestBody Usuarios usuarios,@PathVariable Integer id){
        logger.debug("Inicia controlador para la modificacion de usuario");

        return ResponseEntity.ok(usuarioService.modificarUsuario(usuarios, id)).getBody();
    }

    @DeleteMapping("/{id}")
    public String deleteUsuario(@PathVariable Integer id){

        boolean ok = usuarioService.eliminarUsuarioById(id);

        if (ok){
            return "User with id "+ id + " deleted!";
        }else{
            return "Error, we have a problem and can´t delete user with id : "+id;
        }
    }
}
