const express = require('express');
const conectarDB = require('./config/mongo');
require('dotenv').config(); // Cargar variables de entorno desde .env
const http = require('http');


const app = express();

// Conexión a la base de datos
conectarDB();

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hola mundo desde Node.js!');
});

server.listen(3000, 'localhost', () => {
  console.log('Servidor web escuchando en http://localhost:3000/');
});

const nuevoUsuario = {
  name: 'Juan',
  email: 'juan@example.com'
};

fetch('/clients', {
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(nuevoUsuario)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
