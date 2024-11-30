const express = require('express');
const {
    handleGetCanciones,
    handleCreateCancion,
    handleDeleteCancion,
} = require('../controllers/canciones.controller');

const router = express.Router();

// Ruta para obtener todas las canciones
router.get('/canciones', handleGetCanciones);

// Ruta para agregar una canción
router.post('/canciones', handleCreateCancion);

// Ruta para eliminar una canción
router.delete('/canciones/:id', handleDeleteCancion);

module.exports = router;

