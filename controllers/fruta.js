'use strict'

const { request } = require("../app");

//Importamos el Modelo de la BD de Mongo
let frutaModelo = require('../models/fruta');

/*Funciones */
function prueba(req, res) {
    res.status(200).send({
        message: 'Esta es la ruta por defencto del api REST con MongoDB y NodeJS.'
    });
}

//Adiciona una fruta en la BD.
function adicionarFruta(req, res) {
    let fruta = new frutaModelo();
    let params = req.body;

    if (params.nombre) {
        fruta.nombre = params.nombre;
        fruta.color = params.color;
        fruta.temporada = params.temporada;

        fruta.save((err, frutaStored) => {
            if (err) {
                res.status(500).send({
                    message: 'Error en el servicio.'
                });
            } else {
                if (frutaStored) {
                    res.status(200).send({
                        fruta: frutaStored
                    });
                } else {
                    res.status(200).send({
                        message: 'No se ha Guardado la fruta.'
                    });
                }
            }
        });
    } else {
        res.status(200).send({
            message: 'El nombre de la fruta es obligatorio.'
        });
    }
}

//Trae todas las frutas de la bd
function ltsFrutas(req, res) {
    frutaModelo.find({}).exec((err, fruta) => {
        if (err) {
            res.status(500).send({
                message: 'Error en el servicio.'
            });
        } else {
            if (fruta) {
                res.status(200).send({
                    fruta
                });
            } else {
                res.status(404).send({
                    message: 'No hay Frutas.'
                });
            }
        }
    })
}

//Trae la fruta por el ID
function buscarFruta(req, res) {
    //Obtiene los valores enviados por Post
    let params = req.body;
    //Obtiene el id
    let frutaID = params.id;
    frutaModelo.findById(frutaID).exec((err, fruta) => {
        if (err) {
            res.status(500).send({
                message: 'Error en el servicio.'
            });
        } else {
            if (fruta) {
                res.status(200).send({
                    fruta
                });
            } else {
                res.status(404).send({
                    message: 'No existe la Fruta.'
                });
            }
        }
    });
}

//Trae la fruta por el ID
function buscarFrutaID(req, res) {
    //Busca el ID en la url
    let frutaID = req.params.id;
    frutaModelo.findById(frutaID).exec((err, fruta) => {
        if (err) {
            res.status(500).send({
                message: 'Error en el servicio.'
            });
        } else {
            if (fruta) {
                res.status(200).send({
                    fruta
                });
            } else {
                res.status(404).send({
                    message: 'No existe la Fruta.'
                });
            }
        }
    });
}

//Actualiza la fruta
function actualizarFruta(req, res) {
    let frutaID = req.params.id;
    let frutaActualizada = req.body;

    frutaModelo.findByIdAndUpdate(frutaID, frutaActualizada, { new: true }, (err, fruta) => {
        if (err) {
            res.status(500).send({
                message: 'Error en el servicio.'
            });
        } else {
            if (fruta) {
                res.status(200).send({
                    fruta: fruta
                });
            } else {
                res.status(404).send({
                    message: 'No hay Frutas.'
                });
            }
        }
    });
}

/* Exportar las funciones*/
module.exports = {
    prueba,
    adicionarFruta,
    ltsFrutas,
    buscarFruta,
    buscarFrutaID,
    actualizarFruta
};