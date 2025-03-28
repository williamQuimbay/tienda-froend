package com.api.rest.tienda.excepciones;

public class MarcaNotFoundException extends RuntimeException{

    public MarcaNotFoundException(String message){
        super(message);
    }
}
