var express = require('express');
var PantallaController = require('../controllers/pantalla');

var router = express.Router();

//ruta para pantalla
router.get('/pantalla/list', PantallaController.listar);

module.exports = router;