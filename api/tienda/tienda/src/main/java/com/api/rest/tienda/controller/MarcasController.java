package com.api.rest.tienda.controller;

import com.api.rest.tienda.models.Marcas;
import com.api.rest.tienda.service.MarcasService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/marcas")
public class MarcasController {


    private Logger logger = LoggerFactory.getLogger(MarcasController.class);
    @Autowired
    private MarcasService marcasService;

    @PostMapping
    public ResponseEntity<Marcas>postMarcas(@RequestBody Marcas marcas){
        logger.debug("Inicia el controlador para Marcas");

        return ResponseEntity.ok(marcasService.crearMarcas(marcas)).getBody();
    }

    @GetMapping
    public ResponseEntity<List<Marcas>>getMarcas(){
        logger.debug("Inicia servicio para consultar Marcas");

        return marcasService.obtenerMarcas();
    }


    @GetMapping("/{id}")
    public ResponseEntity<Marcas>getMarcasById(@PathVariable Integer id){
        logger.debug("Inicia controlador para consultar marca por Id");

        return ResponseEntity.ok(marcasService.obtenerMarcaById(id)).getBody();

    }

    @PutMapping("/{id}")
    public ResponseEntity<Marcas>putMarcas(@RequestBody Marcas marcas, @PathVariable Integer id){
        logger.debug("Inicia controlador para modificar Marca");

        return ResponseEntity.ok(marcasService.modificarMarcaById(marcas, id)).getBody();
    }

    @DeleteMapping("/{id}")
    public String deleteMarca(@PathVariable Integer id){

        boolean ok = marcasService.eliminarMarca(id);

        if (ok){
            return "Marca with id "+ id + " deleted!";
        }else{
            return "Error, we have a problem and can´t delete Marca with id : "+id;
        }
    }

}
