'use strict'

/*Cargar Modulos */
let mongoose = require('mongoose')
let app = require('./app');

/* */
let port = 3800;

/*Se crea mongoose como promesa */
mongoose.Promise = global.Promise;

/*Se realiza la conexion a MongoDB */
mongoose.connect('mongodb://localhost:27017/Aprendiendo_Mongo', { useMongoClient: true })
    .then(() => {
        console.log('Conexion a MongoDB se ha completado correctamente.');
        app.listen(port, () => {
            console.log('Servidor esta en ejecucion en el puerto ' + port);

        })
    }).catch(err => console.log('No sepudo hacer la conexion a MongoDB.' + err));