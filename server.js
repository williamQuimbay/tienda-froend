const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  host: "localhost",
  user: "odin", // usuario varia
  password: "D4nt30217", // contraseña
  database: "tienda",
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error("Error conectando a la base de datos:", err);
    return;
  }
  console.log("Conectado a la base de datos MySQL");
});

// Rutas
app.get("/productos", (req, res) => {
  db.query("SELECT * FROM Productos", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.post("/productos", (req, res) => {
  const {
    ID_Producto,
    Codigo_Producto,
    Marca,
    Modelo,
    Pantalla,
    Resolucion,
    Procesador,
    RAM,
    Almacenamiento,
    Bateria,
    Sistema_Operativo,
    Conectividad,
    Precio,
    Fecha_Lanzamiento,
    url_Imagen,
  } = req.body;
  const query =
    "INSERT INTO Productos (ID_Producto, Codigo_Producto, Marca, Modelo, Pantalla, Resolucion, Procesador, RAM, Almacenamiento, Bateria, Sistema_Operativo, Conectividad, Precio, Fecha_Lanzamiento) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(
    query,
    [
      ID_Producto,
      Codigo_Producto,
      Marca,
      Modelo,
      Pantalla,
      Resolucion,
      Procesador,
      RAM,
      Almacenamiento,
      Bateria,
      Sistema_Operativo,
      Conectividad,
      Precio,
      Fecha_Lanzamiento,
      url_Imagen,
    ],
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ id: results.insertId, ...req.body });
    }
  );
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
