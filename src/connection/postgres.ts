import { Sequelize } from "sequelize";
import { dbConnection } from "./security/database/dbConnection";

// Para utilizar o dotenv (Não vou fazer isso para manter os dados do meu bd em segurança)
//import dotenv from 'dotenv';
//dotenv.config();

export const sequelize = new Sequelize(
    dbConnection.PG_DB as string,
    dbConnection.PG_USER as string,
    dbConnection.PG_PASSWORD as string,
    {
        dialect: 'postgres',
        port: dbConnection.PG_PORT
    }
);