const supabase = require('../supabase');

// Obtener todas las reservas
async function getReservas() {
    const { data, error } = await supabase
        .from('reservas')
        .select('*');
    if (error) throw error;
    return data;
}

// Crear reserva
async function crearReserva(reserva) {
    const { data, error } = await supabase
        .from('reservas')
        .insert([reserva]);
    if (error) throw error;
    return data;
}

// Actualizar reserva
async function actualizarReserva(id, datosActualizados) {
    const { data, error } = await supabase
        .from('reservas')
        .update(datosActualizados)
        .eq('id', id);
    if (error) throw error;
    return data;
}

// Eliminar reserva
async function eliminarReserva(id) {
    const { data, error } = await supabase
        .from('reservas')
        .delete()
        .eq('id', id);
    if (error) throw error;
    return data;
}

module.exports = {
    getReservas,
    crearReserva,
    actualizarReserva,
    eliminarReserva
};
