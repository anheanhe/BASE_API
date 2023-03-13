const express = require('express');
const router = express.Router();

// Ruta para obtener todos los clientes
router.get('/clientes', (req, res) => {
  // Lógica para obtener todos los clientes
  res.send('Obtener todos los clientes');
});

// Ruta para obtener un cliente por su ID
router.get('/clientes/:id', (req, res) => {
  const id = req.params.id;
  // Lógica para obtener el cliente con el ID especificado
  res.send(`Obtener cliente con ID ${id}`);
});

// Ruta para agregar un nuevo cliente
router.post('/clientes', (req, res) => {
  const { nombre, email, telefono } = req.body;
  // Lógica para agregar un nuevo cliente con los datos especificados
  res.send(`Agregar nuevo cliente: ${nombre}, ${email}, ${telefono}`);
});

// Ruta para actualizar un cliente existente
router.put('/clientes/:id', (req, res) => {
  const id = req.params.id;
  const { nombre, email, telefono } = req.body;
  // Lógica para actualizar el cliente con el ID especificado y los nuevos datos
  res.send(`Actualizar cliente con ID ${id}: ${nombre}, ${email}, ${telefono}`);
});

// Ruta para eliminar un cliente existente
router.delete('/clientes/:id', (req, res) => {
  const id = req.params.id;
  // Lógica para eliminar el cliente con el ID especificado
  res.send(`Eliminar cliente con ID ${id}`);
});

module.exports = router;
