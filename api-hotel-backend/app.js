require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Importar rutas
const habitacionRoutes = require('./routes/habitacionRoute');
const clienteRoute = require('./routes/clienteRoute');
const reservaRoute = require('./routes/reservaRoute');
const usuarioRoute = require('./routes/usuarioRoute');

// Inicializar Express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas de la API
app.use('/api/habitaciones', habitacionRoutes);
app.use('/api/clientes', clienteRoute);
app.use('/api/reservas', reservaRoute);
app.use('/api/usuarios', usuarioRoute);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('API Hotel funcionando correctamente!');
});

// Iniciar servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
