const express = require('express');
const { check, validationResult } = require('express-validator');

// Middleware para validar datos de entrada
const validateProduct = [
  check('tipo').notEmpty().withMessage('El tipo es requerido.'),
  check('marca').notEmpty().withMessage('La marca es requerida.'),
  check('modelo').notEmpty().withMessage('El modelo es requerido.'),
  check('almacenamiento').isNumeric().withMessage('El almacenamiento debe ser un número.'),
  check('ram').isNumeric().withMessage('La RAM debe ser un número.'),
  check('procesador').notEmpty().withMessage('El procesador es requerido.'),
  check('pantalla').notEmpty().withMessage('La pantalla es requerida.'),
  check('precio').isNumeric().withMessage('El precio debe ser un número.'),
];

// Middleware para manejar errores de validación
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Exportar los middlewares
module.exports = {
  validateProduct,
  handleValidationErrors,
};