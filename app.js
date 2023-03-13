const express = require('express');
const conectarDB = require('./config/mongo');
require('dotenv').config(); // Cargar variables de entorno desde .env

const app = express();

// Conexión a la base de datos
conectarDB();

const nuevoUsuario = {
  name: 'Juan',
  email: 'juan@example.com'
};

fetch('/client', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(nuevoUsuario)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
