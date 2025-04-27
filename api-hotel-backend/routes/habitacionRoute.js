// routes/habitacionRoute.js
const express = require('express');
const router = express.Router();
const habitacionController = require('../controllers/habitacionController');

// Rutas
router.get('/', habitacionController.listarHabitaciones);
router.post('/', habitacionController.crearHabitacion);
router.put('/:id', habitacionController.actualizarHabitacion);  // NUEVO
router.delete('/:id', habitacionController.eliminarHabitacion); // NUEVO

module.exports = router;
