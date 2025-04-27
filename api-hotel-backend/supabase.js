// supabase.js
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

// Creamos el cliente de Supabase usando las variables de entorno
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

module.exports = supabase;
