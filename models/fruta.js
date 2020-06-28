'use strict'

let mongoose = require('mongoose');
let schema = mongoose.Schema;

/*Creacion del esquema de la coleccion Frutas*/
let frutaSchema = schema({
    nombre: String,
    color: String,
    temporada: Boolean
});


module.exports = mongoose.model('Fruta', frutaSchema);