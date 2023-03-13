const express = require('express');
const conectarDB = require('./config/mongo');
require('dotenv').config(); // Cargar variables de entorno desde .env

const app = express();

// Conexión a la base de datos
conectarDB();

app.use(express.json());

// Ruta para agregar un nuevo cliente
app.post('/clientes', (req, res) => {
  const { nombre, email } = req.body;
  // Lógica para agregar un nuevo cliente con los datos especificados
  res.send(`Agregar nuevo cliente: ${nombre}, ${email}`);
});

app.listen(3000, () => {
  console.log('Servidor web escuchando en http://localhost:3000/');
});
