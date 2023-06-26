import Sequelize from 'sequelize';
import connection from '../config/db/connection.js';

const Altura = connection.define('Altura', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  porte: {
    type: Sequelize.STRING(100)
  },
  alturaMin: {
    type: Sequelize.DECIMAL(6, 2)
  },
  alturaMax: {
    type: Sequelize.DECIMAL(6, 2)
  }
});

export default Altura;