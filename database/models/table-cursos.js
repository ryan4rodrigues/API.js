const { Sequelize } = require('sequelize');
const sequelize = require('../db')

const Cursos = sequelize.define('cursos', {

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

    description: {

      type: Sequelize.STRING
    },

    duration: {

      type: Sequelize.INTEGER,
      allowNull: false

    }
});

Cursos.sync()


module.exports = Cursos;