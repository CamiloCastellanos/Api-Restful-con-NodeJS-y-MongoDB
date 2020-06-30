'use strict'

let mongoose = require('mongoose');
let schema = mongoose.Schema;

/*Creacion del esquema de la coleccion Frutas*/
let frutaSchema = schema({
    nombre: String,
    color: String,
    temporada: Boolean
});

/*
Recordatorio:
- Si no existe la BD la genera.
- La BD se genera toda en minusculas y en plural
(Esto lo hace automaticamente la libreria de mondoose)
*/
module.exports = mongoose.model('Fruta', frutaSchema);