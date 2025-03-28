const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "odin",
  password: "tu_contraseña",
  database: "tienda",
});

const connectToDatabase = () => {
  connection.connect((err) => {
    if (err) {
      console.error("Error conectando a la base de datos:", err);
      return;
    }
    console.log("Conectado a la base de datos");
  });
};

module.exports = { connection, connectToDatabase };
