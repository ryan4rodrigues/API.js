const sequelize  = require('./database/db.js')

sequelize.authenticate().then(() => {

    console.log("Conexão realizada com sucesso.")

}).catch(() => {

    console.log("Erro ao conectar ao banco de dados.")

})


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