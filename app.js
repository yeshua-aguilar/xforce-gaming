'use strict'

// REQUIRES
var express = require('express');

// CARGAR ARCHIVOS DE RUTAS
var pantalla_routes = require('./routes/pantalla_gamer.js');


// EJECUTAR EXPRESS
var app = express();

// ASIGNO EJS A LAS VISTAS
app.set('view engine','ejs');

// DECODIFICACION DE ENVIOS FORM
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// REESCRIBIR RUTAS
app.use('/',pantalla_routes);



//EXPORTAR MODULE
module.exports = app;