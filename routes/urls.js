const express = require('express');
const router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// Función para leer la base de datos
const readDatabase = () => {
    const data = fs.readFileSync('./database.json');
    return JSON.parse(data);
};

// Función para guardar en la base de datos
const saveDatabase = (data) => {
    fs.writeFileSync('./database.json', JSON.stringify(data, null, 2));
};

// POST /acorta - Acortar una URL
router.post('/acorta', (req, res) => {
    // TODO: Lógica para acortar la URL (a completar por el alumno)
    // 1. Leer datos desde req.body
    // 2. Generar código único (o personalizado)
    // 3. Guardar en la "base de datos" (archivo JSON)
    // 4. Retornar respuesta con datos del nuevo registro
    const { user, url } = req.body

    if(!user || !url) {
        console.log('Faltan datos');
        return res.status(404).json({message: 'Faltan datos necesarios'})
    }
    const readData = readDatabase()

});

// GET /validar/:tulink - Validar si un link personalizado está disponible
router.get('/validar/:tulink', (req, res) => {
    // TODO: Validar si el link personalizado está disponible
    // 1. Verificar que el código tenga entre 6 y 10 caracteres
    // 2. Buscar si el código ya existe en la base de datos
    // 3. Retornar respuesta indicando si está disponible o no
    const {link} = req.params
});

// GET /:codigo - Redireccionar a la URL original
router.get('/:codigo', (req, res) => {
    // TODO: Redireccionar a la URL original
    // 1. Buscar el código en la base de datos
    // 2. Si existe, incrementar el contador de visitas
    // 3. Redirigir al sitio original
});

module.exports = router;
