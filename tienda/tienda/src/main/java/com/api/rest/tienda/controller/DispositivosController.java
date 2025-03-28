package com.api.rest.tienda.controller;


import com.api.rest.tienda.models.Dispositivos;
import com.api.rest.tienda.service.DispositivosService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/dispositivos")
public class DispositivosController {

    private Logger logger = LoggerFactory.getLogger(DispositivosController.class);

    @Autowired
    private DispositivosService dispositivosService;


    @GetMapping
    public ResponseEntity<List<Dispositivos>>getDispositivos(){
       logger.debug("Inicia controlador para consultar Dispositivos");
        return ResponseEntity.ok(dispositivosService.obtenerDispositivos().getBody());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Dispositivos>>getDispositivosById(@PathVariable Integer id){
        logger.debug("Inicia controlador para consultar dispositivo por Id");
        return ResponseEntity.ok(dispositivosService.consultarDispositivoById(id)).getBody();
    }


    @PostMapping
    public ResponseEntity<Dispositivos>postDispositivos(@RequestBody Dispositivos dispositivos){
        logger.debug("Inicia controlador para Crear Dispositivos");
        return ResponseEntity.ok(dispositivosService.crearDispositivos(dispositivos)).getBody();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Dispositivos>putDispositivoById(@RequestBody Dispositivos dispositivos,@PathVariable Integer id){
        logger.debug("Inicia servicio para la modificacion de Dispositivo");

        return ResponseEntity.ok(dispositivosService.modificarDispositivoById(dispositivos, id)).getBody();
    }

    @DeleteMapping("/{id}")
    public String deleteDispositivo(@PathVariable Integer id){

        boolean ok = dispositivosService.elimiarDispositivoById(id);

        if (ok){
            return "Device with id "+ id + " deleted!";
        }else{
            return "Error, we have a problem and can´t delete device with id : "+id;
        }
    }

}
