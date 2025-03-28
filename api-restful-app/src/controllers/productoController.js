const connection = require("../config/database");

// Obtener todos los productos
exports.getAllProductos = (req, res) => {
  const query = "SELECT * FROM Productos";
  connection.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

// Obtener un producto por ID
exports.getProductoById = (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM Productos WHERE id = ?";
  connection.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json(results[0]);
  });
};

// Crear un nuevo producto
exports.createProducto = (req, res) => {
  const {
    tipo,
    marca,
    modelo,
    almacenamiento,
    ram,
    procesador,
    pantalla,
    precio,
    url_Imagen,
  } = req.body;

  const query =
    "INSERT INTO Productos (tipo, marca, modelo, almacenamiento, ram, procesador, pantalla, precio, url_Imagen) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
  connection.query(
    query,
    [
      tipo,
      marca,
      modelo,
      almacenamiento,
      ram,
      procesador,
      pantalla,
      precio,
      url_Imagen,
    ],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ message: "Producto creado exitosamente" });
    }
  );
};

// Actualizar un producto por ID
exports.updateProducto = (req, res) => {
  const { id } = req.params;
  const {
    tipo,
    marca,
    modelo,
    almacenamiento,
    ram,
    procesador,
    pantalla,
    precio,
    url_Imagen,
  } = req.body;

  const query =
    "UPDATE Productos SET tipo = ?, marca = ?, modelo = ?, almacenamiento = ?, ram = ?, procesador = ?, pantalla = ?, precio = ?, url_Imagen = ? WHERE id = ?";
  connection.query(
    query,
    [
      tipo,
      marca,
      modelo,
      almacenamiento,
      ram,
      procesador,
      pantalla,
      precio,
      url_Imagen,
      id,
    ],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }
      res.json({ message: "Producto actualizado exitosamente" });
    }
  );
};

// Eliminar un producto por ID
exports.deleteProducto = (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM Productos WHERE id = ?";
  connection.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json({ message: "Producto eliminado exitosamente" });
  });
};
