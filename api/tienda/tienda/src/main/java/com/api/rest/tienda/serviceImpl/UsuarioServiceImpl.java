package com.api.rest.tienda.serviceImpl;

import com.api.rest.tienda.excepciones.DispositivoNotFoundException;
import com.api.rest.tienda.excepciones.UsuarioNotFoundException;
import com.api.rest.tienda.models.Usuarios;
import com.api.rest.tienda.repositories.UsuarioRepository;
import com.api.rest.tienda.service.UsuarioService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    private Logger logger = LoggerFactory.getLogger(UsuarioServiceImpl.class);
    @Autowired
    private UsuarioRepository usuarioRepository;


    @Override
    public ResponseEntity<List<Usuarios>> obtenerUsuarios() {
        logger.info("Inicia el servicio para consulta de usuarios");
        return ResponseEntity.ok(usuarioRepository.obtenerTodos());

    }

    @Override
    public ResponseEntity<Usuarios> crearUsuarios(Usuarios usuarios) {
        logger.info("Inicia servicio para creacion de usuario");
        return ResponseEntity.ok(usuarioRepository.save(usuarios));
    }

    @Override
    public ResponseEntity<Optional<Usuarios>> consultarusuarioById(int id) {
        logger.info("Inicia servicio para consultar usuario por Id");
        Optional<Usuarios> usuario = usuarioRepository.findById(id);

        if (usuario.isEmpty()) {
            throw new UsuarioNotFoundException("Usuario con ID " + id + " no encontrado");
        }

        return ResponseEntity.ok(usuario);
    }

    @Override
    public ResponseEntity<Usuarios> modificarUsuario(Usuarios request, int id) {
        logger.info("Inicia servicio para la modificacion de Usuario");

        Usuarios usuarioEncontrado = usuarioRepository.findById(id)
                .orElseThrow(() -> new UsuarioNotFoundException("Usuario con ID " + id + " no encontrado"));

        usuarioEncontrado.setNombreUsuario(request.getNombreUsuario());
        usuarioEncontrado.setCorreo(request.getCorreo());
        usuarioEncontrado.setContrasena(request.getContrasena());
        usuarioEncontrado.setRol(request.getRol());

        return ResponseEntity.ok(usuarioRepository.save(usuarioEncontrado));

    }

    @Override
    public Boolean eliminarUsuarioById(int id) {
        if (!usuarioRepository.existsById(id)) {
            throw new UsuarioNotFoundException("Usuario con ID " + id + " no encontrado, no se puede eliminar");
        }

        try {
            usuarioRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            throw new RuntimeException("Error al eliminar el usuario con ID " + id);
        }
    }

}
