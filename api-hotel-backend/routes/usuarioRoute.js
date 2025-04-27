const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/', usuarioController.listarUsuarios);
router.post('/', usuarioController.crearUsuario);
router.delete('/:id', usuarioController.eliminarUsuario);
router.post('/login', usuarioController.login);

module.exports = router;
