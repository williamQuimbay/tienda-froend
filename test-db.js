const mysql = require("mysql2");

// Configuración de la conexión
const connection = mysql.createConnection({
  host: "localhost", // Cambia esto si tu base de datos está en otro host
  user: "odin", // Cambia esto por tu usuario de MySQL
  password: "D4nt30217", // Cambia esto por tu contraseña de MySQL
  database: "tienda", // Cambia esto por el nombre de tu base de datos
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error("Error conectando a la base de datos:", err);
    return;
  }
  console.log("Conectado a la base de datos MySQL");

  // Realizar una consulta de prueba
  connection.query("SELECT * FROM Productos", (error, results) => {
    if (error) {
      console.error("Error realizando la consulta:", error);
      return;
    }
    console.log("Resultados de la consulta:", results);

    // Cerrar la conexión
    connection.end();
  });
});
