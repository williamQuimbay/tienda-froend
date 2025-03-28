package com.api.rest.tienda.excepciones;

public class UsuarioNotFoundException extends RuntimeException{

    public UsuarioNotFoundException(String message) {
        super(message);
    }
}
