const express = require('express');
const path = require('path');
const routes = require('./routes/routes');

const app = express();

// Middleware para manejar JSON
app.use(express.json());

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Configurar las rutas de la API
app.use('/api', routes);

module.exports = app;

