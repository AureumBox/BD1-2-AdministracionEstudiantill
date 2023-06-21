const { Model, DataTypes, Sequelize } = require("sequelize");

const SCHOOL_TABLE = "escuela";

class School extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: SCHOOL_TABLE,
      modelName: "School",
    };
  }
}

const SchoolSchema = {
  codescuela: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.STRING(12),
    field: "codescuela",
  },
  nombreesc: {
    allowNull: false,
    type: DataTypes.STRING(40),
    field: "nombreesc",
  },
  fechacreacion: {
    allowNull: false,
    type: DataTypes.DATEONLY,
    field: "fechacreacion",
  }
};

module.exports = { School, SchoolSchema };
