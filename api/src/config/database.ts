import { Sequelize, Dialect } from 'sequelize';
import { config } from 'dotenv';


config();


const sequelize = new Sequelize({
    dialect: process.env.DB_DIALECT as Dialect,
    storage: process.env.DB_NAME,
});


export default sequelize;
