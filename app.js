'use strict'
/*Cargar modulos */
let express = require('express');
let bodyParser = require('body-parser');

let app = express();

// Cargar Rutas

let frutaRouter = require('./routes/frutas');


//body-parser

// Convierte las peticiones realizadas en JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configuracion CORS

/* Rutas */

// Ruta por defecto
app.get("/", (req, res) => {
    res.status(200).send({
        message: 'Esta es la ruta por defecto del api REST con MongoDB y NodeJS.'
    });
});

//Ruta Base
app.use('/api', frutaRouter);


//Exporta el modulo generado en el codigo anterior 
module.exports = app;