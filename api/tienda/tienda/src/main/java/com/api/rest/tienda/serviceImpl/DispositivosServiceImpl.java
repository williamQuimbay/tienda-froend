package com.api.rest.tienda.serviceImpl;

import com.api.rest.tienda.excepciones.DispositivoNotFoundException;
import com.api.rest.tienda.models.Dispositivos;
import com.api.rest.tienda.repositories.DispositivosRepository;
import com.api.rest.tienda.service.DispositivosService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DispositivosServiceImpl  implements DispositivosService {

    private Logger logger = LoggerFactory.getLogger(DispositivosServiceImpl.class);
    @Autowired
    private DispositivosRepository dispositivosRepository;

    @Override
    public ResponseEntity<List<Dispositivos>> obtenerDispositivos() {

        return ResponseEntity.ok(dispositivosRepository.findAll());
    }

    @Override
    public ResponseEntity<Optional<Dispositivos>> consultarDispositivoById(int id) {
        logger.info("Inicia servicio para consultar dispositivo By Id");
        Optional<Dispositivos> dispositivo = dispositivosRepository.findById(id);

        if (dispositivo.isEmpty()) {
            throw new DispositivoNotFoundException("Dispositivo con ID " + id + " no encontrado");
        }

        return ResponseEntity.ok(dispositivo);
    }

    @Override
    public ResponseEntity<Dispositivos> crearDispositivos(Dispositivos dispositivos) {
        logger.info("Inicia servicio para crae Dispositivo");
        return ResponseEntity.ok(dispositivosRepository.save(dispositivos));
    }

    @Override
    public ResponseEntity<Dispositivos> modificarDispositivoById(Dispositivos request, int id) {
        logger.info("Inicia servicio para modificar Dispositivo");

        Dispositivos dispositivoEncontrado = dispositivosRepository.findById(id)
                .orElseThrow(() -> new DispositivoNotFoundException("Dispositivo con ID " + id + " no encontrado"));

        dispositivoEncontrado.setTipo(request.getTipo());
        dispositivoEncontrado.setMarca(request.getMarca());
        dispositivoEncontrado.setModelo(request.getModelo());
        dispositivoEncontrado.setAlmacenamiento(request.getAlmacenamiento());
        dispositivoEncontrado.setRam(request.getRam());
        dispositivoEncontrado.setProcesador(request.getProcesador());
        dispositivoEncontrado.setPantalla(request.getPantalla());
        dispositivoEncontrado.setPrecio(request.getPrecio());
        dispositivoEncontrado.setUrlImagen(request.getUrlImagen());

        return ResponseEntity.ok(dispositivosRepository.save(dispositivoEncontrado));

    }

    @Override
    public Boolean elimiarDispositivoById(int id) {

        if (!dispositivosRepository.existsById(id)) {
            throw new DispositivoNotFoundException("Dispositivo con ID " + id + " no encontrado, no se puede eliminar");
        }

        try {
            dispositivosRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            throw new RuntimeException("Error al eliminar el dispositivo con ID " + id);
        }
    }

    @Override
    public ResponseEntity<List<Dispositivos>> findDeviceBytypeAndBrand(String tipo, String marca) {
        logger.info("Inicia servicio de busqueda de device por tipo y marca");

        List<Dispositivos> dispositivos = dispositivosRepository.findByTipoAndMarca(tipo, marca);

        if (dispositivos.isEmpty()) {
            throw new DispositivoNotFoundException("No se encontraron dispositivos para el tipo: " + tipo + " y marca: " + marca);
        }

        return ResponseEntity.ok(dispositivos);

    }
}
