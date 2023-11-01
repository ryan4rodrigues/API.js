const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('cursos', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;

sequelize.authenticate().then(() => {

    console.log("Conexão realizada com sucesso.")

}).catch(() => {

    console.log("Erro ao conectar ao banco de dados.")

})


module.exports = sequelize;