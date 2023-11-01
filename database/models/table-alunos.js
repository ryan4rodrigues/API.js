const { Sequelize } = require('sequelize');
const sequelize = require('../db');


const Alunos = sequelize.define('alunos', {

    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },

    name: {

      type: Sequelize.STRING,
      allowNull: false
    },

    cpf: {

      type: Sequelize.STRING
    },

    dateOfbirth: {

      type: Sequelize.STRING,
      allowNull: false

    }
});

Alunos.sync()

module.exports = Alunos