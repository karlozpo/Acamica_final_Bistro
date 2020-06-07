const Sequelize = require('sequelize');

const bd_name= 'master_carlos'; // nombre de tu base de datos;
const bd_user= 'master_carlos'; // nombre de tu usuario;
const bd_password= 'admin8080'; // contraseña de tu usuario;
const bd_host= 'automosaiko.tk'; // Hosting;
const bd_port= '3306'; // Numero de Puerto;

const bd_url= 'mysql://'+bd_user+':'+bd_password+'@'+bd_host+':'+bd_port+'/'+bd_name;

const sequelize = new Sequelize(
    bd_url
);

module.exports = sequelize;