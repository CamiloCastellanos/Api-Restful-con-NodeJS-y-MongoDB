'use strict'

let express = require('express');
let frutaController = require('../controllers/fruta');

let api = express.Router();

api.get('/pruebas', frutaController.prueba);


module.exports = api;