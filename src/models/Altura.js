import Sequelize from 'sequelize';
import connection from '../config/db/connection.js';

// Altura (id, descricao, alturaMin, alturaMax, porte);

const Altura = connection.define('altura',
{
    id:
    {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:
    }





});