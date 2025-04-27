// app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Inicializamos Express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Importar rutas
const habitacionRoute = require('./routes/habitacionRoute');
const clienteRoute = require('./routes/clienteRoute');
const reservaRoute = require('./routes/reservaRoute');
const usuarioRoute = require('./routes/usuarioRoute');

// Usar rutas
app.use('/api/habitaciones', habitacionRoute);
app.use('/api/clientes', clienteRoute);
app.use('/api/reservas', reservaRoute);
app.use('/api/usuarios', usuarioRoute);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('API Hotel funcionando 🚀');
});

// Arrancar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
