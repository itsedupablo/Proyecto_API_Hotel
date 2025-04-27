const clienteModel = require('../models/clienteModel');

async function listarClientes(req, res) {
    try {
        const clientes = await clienteModel.getClientes();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function crearCliente(req, res) {
    try {
        const nuevoCliente = req.body;
        const data = await clienteModel.crearCliente(nuevoCliente);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function actualizarCliente(req, res) {
    try {
        const id = req.params.id;
        const datosActualizados = req.body;
        const data = await clienteModel.actualizarCliente(id, datosActualizados);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function eliminarCliente(req, res) {
    try {
        const id = req.params.id;
        const data = await clienteModel.eliminarCliente(id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    listarClientes,
    crearCliente,
    actualizarCliente,
    eliminarCliente
};
