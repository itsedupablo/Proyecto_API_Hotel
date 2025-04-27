const supabase = require('../supabase');

// Obtener todos los usuarios
async function getUsuarios() {
    const { data, error } = await supabase
        .from('usuarios')
        .select('*');
    if (error) throw error;
    return data;
}

// Crear usuario
async function crearUsuario(usuario) {
    const { data, error } = await supabase
        .from('usuarios')
        .insert([usuario]);
    if (error) throw error;
    return data;
}
// Eliminar usuario
async function eliminarUsuario(id) {
    const { data, error } = await supabase
        .from('usuarios')
        .delete()
        .eq('id', id);

    if (error) throw error;
    return data;
}


// Buscar usuario por nombre de usuario
async function buscarUsuarioPorUsername(username) {
    const { data, error } = await supabase
        .from('usuarios')
        .select('*')
        .eq('username', username)
        .single(); // Solo uno

    if (error) throw error;
    return data;
}

module.exports = {
    getUsuarios,
    crearUsuario,
    eliminarUsuario,
    buscarUsuarioPorUsername
};
