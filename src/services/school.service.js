const { models } = require('../libs/sequelize');

class SchoolService { 
  
    constructor() {}

    async find() {
      const res = await models.School.findAll();
      return res;
    }

    async findOne(id) {
      const res = await models.School.findByPk(id);
      return res;
    }

    async create(data) {
      const res = await models.School.create(data);
      return res;
    }

    async update(id, data) {
      const model = await this.findOne(id);
      const res = await model.update(data);
      return res;
    }

    async delete(id) {
      const model = await this.findOne(id);
      await model.destroy();
      return { deleted: true };
    }
  
  }
  
  module.exports = SchoolService;