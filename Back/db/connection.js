const { Sequelize } = require('sequelize')
const {database} = require('./config')

//Info para acceder a la DB...
console.log(database)

//Objeto sequelize
const sequelize = new Sequelize(database.database, database.username, database.password, {
    host: database.host,
    port: 39622,
    dialect: 'mysql' 
  });


module.exports = sequelize