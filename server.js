const express = require("express");
const mysql = require("mysql");
const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors"); // Requerir el paquete cors
const connection = require("./js/database");

const app = express();

app.use(cors()); // Usar el middleware cors
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Configuración de Multer para manejar la carga de archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.post("/agregar-producto", upload.single("imagen"), (req, res) => {
  const {
    tipo,
    marca,
    modelo,
    almacenamiento,
    ram,
    procesador,
    pantalla,
    precio,
  } = req.body;
  const url_Imagen = `/uploads/${req.file.filename}`; // URL de la imagen en el servidor

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
      res.status(201).json({ message: "Producto agregado exitosamente" });
    }
  );
});

// Ruta de inicio de sesión
app.post("/login", (req, res) => {
  const { correo, contraseña } = req.body;

  console.log("Datos recibidos:", correo, contraseña); // Agregar log para depuración

  const query = "SELECT * FROM Usuarios WHERE correo = ? AND contraseña = ?";
  connection.query(query, [correo, contraseña], (err, results) => {
    if (err) {
      console.error("Error en la consulta:", err); // Agregar log para depuración
      return res.status(500).json({ error: err.message });
    }

    console.log("Resultados de la consulta:", results); // Agregar log para depuración

    if (results.length > 0) {
      res.status(200).json({
        message: "Inicio de sesión exitoso",
        nombre_usuario: results[0].nombre_usuario,
        rol: results[0].rol, // Enviar el rol del usuario
      });
    } else {
      res.status(401).json({ message: "Correo o contraseña incorrectos" });
    }
  });
});

// Ruta de registro
app.post("/register", (req, res) => {
  const { nombre_usuario, correo, contraseña } = req.body;

  const query =
    "INSERT INTO Usuarios (nombre_usuario, correo, contraseña) VALUES (?, ?, ?)";
  connection.query(
    query,
    [nombre_usuario, correo, contraseña],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ message: "Usuario registrado exitosamente" });
    }
  );
});

// Ruta para obtener productos
app.get("/dispositivos", (req, res) => {
  const query = "SELECT * FROM dispositivos";
  connection.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Ruta para registrar dispositivos
app.post("/register-device", (req, res) => {
  const {
    tipo,
    marca,
    modelo,
    almacenamiento,
    ram,
    procesador,
    pantalla,
    precio,
    url_imagen,
  } = req.body;

  // Asegúrate de que todos los campos estén definidos
  if (
    !tipo ||
    !marca ||
    !modelo ||
    !almacenamiento ||
    !ram ||
    !procesador ||
    !pantalla ||
    !precio ||
    !url_imagen
  ) {
    return res.status(400).json({ error: "Todos los campos son requeridos." });
  }

  const query =
    "INSERT INTO dispositivos (tipo, marca, modelo, almacenamiento, ram, procesador, pantalla, precio, url_imagen) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
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
      url_imagen,
    ],
    (err, result) => {
      if (err) {
        console.error("Error al registrar el dispositivo:", err);
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ message: "Dispositivo registrado exitosamente" });
    }
  );
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
