const connection = require("../config/database");

// Inicio de sesión
exports.login = (req, res) => {
  const { correo, contraseña } = req.body;

  const query = "SELECT * FROM Usuarios WHERE correo = ? AND contraseña = ?";
  connection.query(query, [correo, contraseña], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (results.length > 0) {
      res.status(200).json({
        message: "Inicio de sesión exitoso",
        nombre_usuario: results[0].nombre_usuario,
        rol: results[0].rol,
      });
    } else {
      res.status(401).json({ message: "Correo o contraseña incorrectos" });
    }
  });
};

// Registro de usuario
exports.register = (req, res) => {
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
};
