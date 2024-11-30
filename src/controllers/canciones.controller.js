const { readFileSync, writeFileSync } = require('fs');

// Ruta del archivo JSON donde se almacenan las canciones
const jsonPath = 'repertorio.json';

// Obtener todas las canciones
const handleGetCanciones = (req, res) => {
    const canciones = JSON.parse(readFileSync(jsonPath, 'utf-8'));
    res.status(200).json(canciones);
};

// Agregar una nueva canción
const handleCreateCancion = (req, res) => {
    const cancion = req.body;

    const prevCanciones = JSON.parse(readFileSync(jsonPath, 'utf-8'));
    cancion.id = prevCanciones.length ? prevCanciones[prevCanciones.length - 1].id + 1 : 1;
    prevCanciones.push(cancion);

    writeFileSync(jsonPath, JSON.stringify(prevCanciones, null, 3));
    res.status(201).send('Canción agregada con éxito 🎵');
};

// Eliminar una canción
const handleDeleteCancion = (req, res) => {
    const { id } = req.params;

    const prevCanciones = JSON.parse(readFileSync(jsonPath, 'utf-8'));
    const filteredCanciones = prevCanciones.filter((cancion) => cancion.id != id);

    writeFileSync(jsonPath, JSON.stringify(filteredCanciones, null, 3));
    res.send('Canción eliminada con éxito 🎵');
};

module.exports = {
    handleGetCanciones,
    handleCreateCancion,
    handleDeleteCancion,
};

