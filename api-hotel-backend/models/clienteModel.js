const supabase = require('../supabase');

// Obtener todos los clientes
async function getClientes() {
    const { data, error } = await supabase
        .from('clientes')
        .select('*');
    if (error) throw error;
    return data;
}

// Crear cliente
async function crearCliente(cliente) {
    const { data, error } = await supabase
        .from('clientes')
        .insert([cliente]);
    if (error) throw error;
    return data;
}

// Actualizar cliente
async function actualizarCliente(id, datosActualizados) {
    const { data, error } = await supabase
        .from('clientes')
        .update(datosActualizados)
        .eq('id', id);
    if (error) throw error;
    return data;
}

// Eliminar cliente
async function eliminarCliente(id) {
    const { data, error } = await supabase
        .from('clientes')
        .delete()
        .eq('id', id);
    if (error) throw error;
    return data;
}

module.exports = {
    getClientes,
    crearCliente,
    actualizarCliente,
    eliminarCliente
};
