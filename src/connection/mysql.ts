import { Sequelize } from "sequelize";
import { dbConnection } from "./security/database/dbConnection";

// Para utilizar o dotenv (Não vou fazer isso para manter os dados do meu bd em segurança)
//import dotenv from 'dotenv';
//dotenv.config();

export const sequelize = new Sequelize(
    dbConnection.MYSQL_DB as string,
    dbConnection.MYSQL_USER as string,
    dbConnection.MYSQL_PASSWORD as string,
    {
        dialect: 'mysql',
        port: dbConnection.MYSQL_PORT
    }
);