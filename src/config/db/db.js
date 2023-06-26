import { Sequelize } from 'sequelize';
import connection from './connection.js';
import Altura from '../../models/Altura.js';
import Genero from '../../models/Genero.js';
import Pet from '../../models/Pet.js';
import Tutor from '../../models/Tutor.js';
import Usuario from '../../models/Usuario.js';

const db = {};

db.Sequelize = Sequelize;
db.connection = connection;

db.altura = Altura;
db.genero = Genero;
db.pet = Pet;
db.tutor = Tutor;
db.usuario = Usuario;

db.pet.belongsTo(db.altura, { foreignKey: 'altura' });
db.pet.belongsTo(db.tutor, { foreignKey: 'tutor' });
db.pet.belongsTo(db.genero, { foreignKey: 'genero' });

export default db;