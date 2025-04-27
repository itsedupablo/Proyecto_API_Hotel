const reservaModel = require('../models/reservaModel');

// Listar reservas
async function listarReservas(req, res) {
    try {
        const reservas = await reservaModel.getReservas();
        res.json(reservas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Crear reserva
async function crearReserva(req, res) {
    try {
        const nuevaReserva = req.body;
        const data = await reservaModel.crearReserva(nuevaReserva);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Actualizar reserva
async function actualizarReserva(req, res) {
    try {
        const id = req.params.id;
        const datosActualizados = req.body;
        const data = await reservaModel.actualizarReserva(id, datosActualizados);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Eliminar reserva
async function eliminarReserva(req, res) {
    try {
        const id = req.params.id;
        const data = await reservaModel.eliminarReserva(id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    listarReservas,
    crearReserva,
    actualizarReserva,
    eliminarReserva
};
