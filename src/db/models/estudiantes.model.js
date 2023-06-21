const { Model, DataTypes, Sequelize } = require('sequelize');

const STUDENTS_TABLE = 'estudiantes';

class Student extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: STUDENTS_TABLE,
            modelName: 'Student'
        }
    }
} 

const StudentSchema = {
    idestudiante: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'idestudiante'
    },
    cedula: {
        allowNull: false,
        type: DataTypes.STRING(8),
        field: 'cedula'
    },
    nombreest: {
        allowNull: false,
        type: DataTypes.STRING(20),
        field:'nombreest'
    },
    codescuela: {
        allowNull: false,
        type: DataTypes.STRING(12),
        field: 'codescuela'
    },
    direccionest:{ 
        allowNull:false,
        type: DataTypes.TEXT,
        field: 'direccionest'
    },
    telefonoest:{ 
        allowNull: true,
        type: DataTypes.STRING(11),
        field: 'telefonoest'
    },
    fechanac:{ 
        allowNull: false,
        type: DataTypes.DATEONLY,
        field: 'fechanac'
    },
    statusest:{ 
        allowNull:false,
        type: DataTypes.CHAR(1),
        field: 'statusest'
    },
}
  
module.exports = { Student, StudentSchema };