import Sequelize from 'sequelize';
import connection from '../config/db/connection.js';

const Tutor = connection.define('Tutor', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  cpf: {
    type: Sequelize.STRING(14)
  },
  nome: {
    type: Sequelize.STRING(50)
  },
  email: {
    type: Sequelize.STRING(50)
  }
});

export default Tutor;