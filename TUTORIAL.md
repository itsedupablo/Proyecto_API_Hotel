# TUTORIAL - Cómo usar el Proyecto API Hotel

Guía para instalar, configurar y utilizar el proyecto completo.

---

## 🛠️ Requisitos

- Node.js instalado
- Git instalado (opcional)
- Navegador web (Chrome, Edge, etc.)

---

## 📦 Instalación paso a paso

### 1. Clonar o descargar el proyecto

```bash
git clone https://github.com/tu-usuario/Proyecto_API_Hotel.git
```
O descargar el ZIP desde GitHub.

### 2. Crear el archivo .env
En /api-hotel-backend/, crea un archivo .env basado en el ejemplo.
```
PORT=3001
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_KEY=tu-api-key-publica
JWT_SECRET=cualquiersecreto
```

### 3. Instalar dependencias
```
cd api-hotel-backend
npm install
```

### 4. Arrancar backend
```
node app.js
```

### 5.Abrir el frontend
Abre index.html de api-hotel-frontend en el navegador.

## 🔐 Login
Usar las credenciales proporcionadas:
````
Usuario: admin
Contraseña: admin1234
````