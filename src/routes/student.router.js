const express = require('express');
const router = express.Router(); 
const studentsController = require('../controllers/student.controller');

router
    .get('/', studentsController.get )
    .get('/:id', studentsController.getById )
    .post('/', studentsController.create )
    .put('/:id', studentsController.update )
    .delete('/:id', studentsController._delete );

module.exports = router;
