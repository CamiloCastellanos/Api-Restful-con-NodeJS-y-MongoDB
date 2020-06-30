'use strict'

let express = require('express');
let frutaController = require('../controllers/fruta');

let api = express.Router();
/*Rutas a los metodos que conectan con la BD */
api.get('/pruebas', frutaController.prueba);
api.post('/fruta', frutaController.adicionarFruta);
api.post('/frutas', frutaController.ltsFrutas);
api.get('/buscarFruta/:id', frutaController.buscarFrutaID);
api.post('/buscarFruta', frutaController.buscarFruta);

module.exports = api;