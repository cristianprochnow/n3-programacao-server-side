import Sequelize from 'sequelize';
import connection from '../config/db/connection.js';

const Porte = connection.define('Porte', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: Sequelize.VARCHAR(50)
});

export default Porte;