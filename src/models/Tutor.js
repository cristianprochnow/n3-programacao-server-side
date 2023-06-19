const Sequelize = require ('sequelize');
const database = require ('./db');

//Tutor (id, cpf, nome, e-mail)
const Tutor = database.define('tutor',
{
    id:
    {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    cpf:
    {
        type: Sequelize.VARCHAR(50),
        allowNull: false,
    },
    nome:
    {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email:
    {
        type: Sequelize.STRING,
        allowNull: false,
    }
});