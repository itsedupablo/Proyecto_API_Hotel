console.log('CARGADO: reservaRoute.js');

const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reservaController');

router.get('/', reservaController.listarReservas);
router.post('/', reservaController.crearReserva);
router.put('/:id', reservaController.actualizarReserva);
router.delete('/:id', reservaController.eliminarReserva);

module.exports = router;
