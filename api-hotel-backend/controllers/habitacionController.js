// controllers/habitacionController.js
const habitacionModel = require('../models/habitacionModel');

// Listar habitaciones
async function listarHabitaciones(req, res) {
    try {
        const habitaciones = await habitacionModel.getHabitaciones();
        res.json(habitaciones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Crear nueva habitación
async function crearHabitacion(req, res) {
    try {
        const nuevaHabitacion = req.body;
        const data = await habitacionModel.crearHabitacion(nuevaHabitacion);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Actualizar habitación existente
async function actualizarHabitacion(req, res) {
    try {
        const id = req.params.id;
        const datosActualizados = req.body;
        const data = await habitacionModel.actualizarHabitacion(id, datosActualizados);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Eliminar habitación
async function eliminarHabitacion(req, res) {
    try {
        const id = req.params.id;
        const data = await habitacionModel.eliminarHabitacion(id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    listarHabitaciones,
    crearHabitacion,
    actualizarHabitacion,
    eliminarHabitacion
};
