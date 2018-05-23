// import { request } from 'http';

// Requires 
var express = require('express');
var mongoose = require('mongoose');

// Inicializar Variables 
var app = express();

// Conexión a la Base de Datos
mongoose.connection.openUri('mongodb://localhost:27017/suppliesDB', (err, res) => {
    if (err) throw err;

    console.log('Base de Datos corriendo en puerto 27017: \x1b[32m%s\x1b[0m', 'online');
});

// Listener Peticiones
app.listen(3000, () => {
    console.log('Express Server corriendo en puerto 3000: \x1b[32m%s\x1b[0m', 'online')
});

// Rutas 
app.get('/', (request, response, next) => {

    response.status(200).json({
        ok: true,
        mensaje: 'El consumo ha sido realizado con éxito.'
    });

});