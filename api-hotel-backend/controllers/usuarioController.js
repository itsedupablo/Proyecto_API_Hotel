const usuarioModel = require('../models/usuarioModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Listar usuarios
async function listarUsuarios(req, res) {
    try {
        const usuarios = await usuarioModel.getUsuarios();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Crear usuario (opcional)
async function crearUsuario(req, res) {
    try {
        const nuevoUsuario = req.body;
        const hashedPassword = await bcrypt.hash(nuevoUsuario.password, 10);
        nuevoUsuario.password = hashedPassword;

        const data = await usuarioModel.crearUsuario(nuevoUsuario);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//eliminar usuario
async function eliminarUsuario(req, res) {
    try {
        const id = req.params.id;
        const data = await usuarioModel.eliminarUsuario(id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// Login
async function login(req, res) {
    const { username, password } = req.body;

    try {
        const usuario = await usuarioModel.buscarUsuarioPorUsername(username);

        if (!usuario) {
            return res.status(401).json({ error: 'Usuario no encontrado' });
        }

        const validPassword = await bcrypt.compare(password, usuario.password);

        if (!validPassword) {
            return res.status(401).json({ error: 'Contraseña incorrecta' });
        }

        const token = jwt.sign({ id: usuario.id, username: usuario.username }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });

        res.json({ token });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    listarUsuarios,
    crearUsuario,
    eliminarUsuario,
    login
};
