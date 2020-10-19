const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');


// Crear el servidor
const app = express();

// Conectar a la bdd
conectarDB();

// Habilitar cors
app.use(cors());

// Habilitar express.json (permite leer datos que el usuario coloque) BODYPARCER
app.use(express.json({ extend: true }));


// Puerto de la app
const PORT = process.env.PORT || 4000;


// Importar Rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas'));


// Arrancar la app
app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`);
})

// npm init (Crear package.json)
// npm install -D nodemon (-D Lo instala solo den desarrollo)
//                        (cada vez que hay cambios actualiza el servidor)
// npm i express  (Servidor a utilizar)
// npm i mongoose (Es el ORM de Mongo para facilitar las consultas)
// npm i dotenv   (Nos permite crear un archivo con variables de entorno, 
//                 en dev son unas y prd otras)
// npm run dev    (en el package.json creamos 2 script 1 dev otro start)