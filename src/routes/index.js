const express = require('express'); 

const studentsRouter = require('./student.router');
const schoolRouter = require('./school.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router); 
  router.use('/students', studentsRouter);
  router.use('/schools', schoolRouter);
}

module.exports = routerApi;
