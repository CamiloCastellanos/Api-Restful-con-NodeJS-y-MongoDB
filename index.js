'use strict'

let mongoose = require('mongoose')

/*Se crea mongoose como promesa */
mongoose.Promise = global.Promise;

/*Se realiza la conexion a MongoDB */
mongoose.connect('mongodb://localhost:27017/Aprendiendo_Mongo', { useMongoClient: true })
    .then(() => {
        console.log('Conexion a MongoDB se ha completado correctamente.');
    }).catch(err => console.log('No sepudo hacer la conexion a MongoDB.' + err));