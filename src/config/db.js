import { Sequelize } from 'sequelize';
import { DB_PATH } from './const.js';

const connection = new Sequelize({
  dialect: 'sqlite',
  storage: DB_PATH
});

export default connection;
