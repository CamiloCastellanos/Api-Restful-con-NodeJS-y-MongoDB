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

/* Rutas */
//Ruta de Prueba
app.get("/prueba-api", (req, res) => {
    res.status(200).send({
        message: 'Esta ruta es de prueba en mi api REST con MongoDB y NodeJS.'
    })
});
// Ruta por defecto
app.get("/", (req, res) => {
    res.status(200).send({
        message: 'Esta es la ruta por defencto del api REST con MongoDB y NodeJS.'
    })
});

//Exporta el modulo generado en el codigo anterior 
module.exports = app;