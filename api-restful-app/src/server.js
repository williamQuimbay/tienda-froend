const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = require("./app");
const PORT = process.env.PORT || 4000; // Cambia el puerto aquí

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Algo salió mal!");
});
