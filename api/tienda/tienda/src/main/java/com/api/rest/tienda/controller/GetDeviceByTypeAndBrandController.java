package com.api.rest.tienda.controller;


import com.api.rest.tienda.models.Dispositivos;
import com.api.rest.tienda.service.DispositivosService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/dispositivos/")
public class GetDeviceByTypeAndBrandController {

    private Logger logger = LoggerFactory.getLogger(GetDeviceByTypeAndBrandController.class);

    @Autowired
    private DispositivosService dispositivosService;

    @GetMapping("/type-brand")
    public ResponseEntity<List<Dispositivos>>buscarDispositivos(@RequestParam (required = false) String tipo,
                                                                @RequestParam(required = false) String marca){

        logger.debug("Inicia controlador para busqueda personalizada");

        return dispositivosService.findDeviceBytypeAndBrand(tipo, marca);
    }
}
