package com.api.rest.tienda.service;

import com.api.rest.tienda.models.Dispositivos;
import com.api.rest.tienda.models.Usuarios;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface DispositivosService {

    ResponseEntity<List<Dispositivos>> obtenerDispositivos();

    ResponseEntity<Optional<Dispositivos>>consultarDispositivoById(int id);
    ResponseEntity<Dispositivos>crearDispositivos(Dispositivos dispositivos);

    ResponseEntity<Dispositivos>modificarDispositivoById(Dispositivos request, int id);

    Boolean elimiarDispositivoById(int id);

    ResponseEntity<List<Dispositivos>>findDeviceBytypeAndBrand(String tipo, String marca);
}
