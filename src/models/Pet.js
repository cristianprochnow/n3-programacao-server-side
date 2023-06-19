import Sequelize from 'sequelize';
import connection from '../config/db/connection.js';

const Cor = connection.define('Cor', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: Sequelize.STRING(50),
  genero: Sequelize.INTEGER,
  altura: Sequelize.INTEGER,
  tutor: Sequelize.INTEGER
});

export default Cor;