'use strict'
/*Cargar modulos */
let express = require('express');
let bodyParser = require('body-parser');

let app = express();

// Cargar Rutas

//body-parser

// Convierte las peticiones realizadas en JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configuracion CORS

// Rutas

module.exports = app;