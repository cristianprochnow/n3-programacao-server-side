import { Sequelize } from 'sequelize';
import connection from './connection.js';

const db = {};

db.Sequelize = Sequelize;
db.connection = connection;

export default db;