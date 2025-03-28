package com.api.rest.tienda.repositories;

import com.api.rest.tienda.models.Dispositivos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface DispositivosRepository extends JpaRepository<Dispositivos, Integer> {

    // Consulta con filtro por tipo y marca
    //@Query("SELECT d FROM Dispositivo d WHERE (:tipo IS NULL OR d.tipo = :tipo) AND (:marca IS NULL OR d.marca = :marca)")
    List<Dispositivos> findByTipoAndMarca(String tipo,String marca);

}
