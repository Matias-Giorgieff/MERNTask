//Rutas para crear proyectos
const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController');
const auth = require('../middleware/auth')
const { check } = require('express-validator');


// Crear una tarea
// api/tareas
router.post('/',
    auth,
    [
        check('nombre').not().isEmpty().withMessage('El nombre es obligatorio'),
        check('proyecto').not().isEmpty().withMessage('El proyecto es obligatorio')     
    ],
    tareaController.crearTarea
);

// Obtener las tareas por proyecto
router.get('/',
    auth, 
    tareaController.obtenerTareas
);

// Actualizar tarea
router.put('/:id',
    auth, 
    tareaController.actualizarTarea
);

// Actualizar tarea
router.delete('/:id',
    auth, 
    tareaController.eliminarTarea
);


module.exports = router;