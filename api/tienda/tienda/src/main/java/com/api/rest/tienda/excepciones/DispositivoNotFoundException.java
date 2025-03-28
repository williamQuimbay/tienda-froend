package com.api.rest.tienda.excepciones;

public class DispositivoNotFoundException extends RuntimeException{

    public DispositivoNotFoundException(String message) {
        super(message);
    }
}
