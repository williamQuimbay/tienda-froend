package com.api.rest.tienda.serviceImpl;

import com.api.rest.tienda.excepciones.DispositivoNotFoundException;
import com.api.rest.tienda.excepciones.MarcaNotFoundException;
import com.api.rest.tienda.models.Marcas;
import com.api.rest.tienda.repositories.MarcasRepository;
import com.api.rest.tienda.service.MarcasService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MarcasServiceImpl implements MarcasService {

    private Logger logger = LoggerFactory.getLogger(MarcasServiceImpl.class);

    @Autowired
    private MarcasRepository marcasRepository;

    @Override
    public ResponseEntity<Marcas> crearMarcas(Marcas marcas) {
        logger.info("Inicia el servicio para la creacion de Marcas");
        return ResponseEntity.ok(marcasRepository.save(marcas));
    }

    @Override
    public ResponseEntity<List<Marcas>> obtenerMarcas() {
        logger.info("Inicia servicio para consultar Marcas");

        return ResponseEntity.ok(marcasRepository.findAll());
    }

    @Override
    public ResponseEntity<Marcas> obtenerMarcaById(int id) {
        logger.info("Inicia servicio para consultar Marca por Id");
        Marcas marcas = marcasRepository.findById(id)
                .orElseThrow(() -> new MarcaNotFoundException("Marca con ID " + id + " no encontrado"));
        return ResponseEntity.ok(marcas);
    }

    @Override
    public ResponseEntity<Marcas> modificarMarcaById(Marcas request, int id) {
        logger.info("Inicia servicio para modificar Marca");

        Marcas marcaEncontrada = marcasRepository.findById(id)
                .orElseThrow(() -> new MarcaNotFoundException("Marca con ID " + id + " no encontrado"));

        marcaEncontrada.setNombre(request.getNombre());

        return ResponseEntity.ok(marcasRepository.save(marcaEncontrada));
    }

    @Override
    public Boolean eliminarMarca(int id) {
        if (!marcasRepository.existsById(id)) {
            throw new MarcaNotFoundException("Marca con ID " + id + " no encontrado, no se puede eliminar");
        }

        try {
            marcasRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            throw new RuntimeException("Error al eliminar el Marca con ID " + id);
        }
    }


}
