const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');

router.get('/', customerController.list);
router.post('/add', customerController.save);
router.get('/delete/:id', customerController.delete);
router.get('/update/:id', customerController.edit); // Ir a editar
router.post('/update/:id', customerController.update); // Editar - Actualizar

module.exports = router;