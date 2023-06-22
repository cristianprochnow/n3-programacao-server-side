import Sequelize from 'sequelize';
import connection from '../config/db/connection.js';

const Genero = connection.define('Genero', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descricao: Sequelize.STRING(100)
});

export default Genero;