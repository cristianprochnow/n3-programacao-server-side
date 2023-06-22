import Sequelize from 'sequelize';
import connection from '../config/db/connection.js';

const Usuario = connection.define('Usuario', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  apelido: Sequelize.STRING(50),
  email: Sequelize.STRING(50),
  nome: Sequelize.STRING(100),
  password: Sequelize.STRING(100)
});

export default Usuario;