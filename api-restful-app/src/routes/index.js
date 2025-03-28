const express = require("express");
const router = express.Router();
const productoController = require("../controllers/productoController");
const usuarioController = require("../controllers/usuarioController");

// Rutas para productos
router.get("/dispositivos", productoController.getAllProductos);
router.get("/dispositivos/:id", productoController.getProductoById);
router.post("/dispositivos", productoController.createProducto);
router.put("/dispositivos/:id", productoController.updateProducto);
router.delete("/dispositivos/:id", productoController.deleteProducto);

// Rutas para usuarios
router.post("/login", usuarioController.login);
router.post("/register", usuarioController.register);

module.exports = router;
