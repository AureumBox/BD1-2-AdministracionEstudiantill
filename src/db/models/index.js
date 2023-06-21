const { Student, StudentSchema } = require('./estudiantes.model');
const { School, SchoolSchema } = require('./escuelas.model');

function setupModels(sequelize) {
    Student.init(StudentSchema, Student.config(sequelize));
    School.init(SchoolSchema, School.config(sequelize));
}

module.exports = setupModels;