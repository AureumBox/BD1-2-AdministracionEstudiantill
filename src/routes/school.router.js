const express = require('express');
const router = express.Router(); 
const schoolController = require('../controllers/school.controller');

router
    .get('/', schoolController.get )
    .get('/:id', schoolController.getById )
    .post('/', schoolController.create )
    .put('/:id', schoolController.update )
    .delete('/:id', schoolController._delete );

module.exports = router;
