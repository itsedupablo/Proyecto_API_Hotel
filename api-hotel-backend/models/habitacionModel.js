// models/habitacionModel.js
const supabase = require('../supabase');

// Obtener todas las habitaciones
async function getHabitaciones() {
    const { data, error } = await supabase
        .from('habitaciones')
        .select('*');

    if (error) throw error;
    return data;
}

// Crear una nueva habitación
async function crearHabitacion(habitacion) {
    const { data, error } = await supabase
        .from('habitaciones')
        .insert([habitacion]);

    if (error) throw error;
    return data;
}

// Actualizar una habitación existente
async function actualizarHabitacion(id, datosActualizados) {
    const { data, error } = await supabase
        .from('habitaciones')
        .update(datosActualizados)
        .eq('id', id);

    if (error) throw error;
    return data;
}

// Eliminar una habitación
async function eliminarHabitacion(id) {
    const { data, error } = await supabase
        .from('habitaciones')
        .delete()
        .eq('id', id);

    if (error) throw error;
    return data;
}

module.exports = {
    getHabitaciones,
    crearHabitacion,
    actualizarHabitacion,
    eliminarHabitacion
};
