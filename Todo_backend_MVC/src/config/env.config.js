import dotenv from "dotenv";
dotenv.config();


export const Env = {
    port: process.env.PORT || 3000,
    dbConnectionString: process.env.DATABASE_CONNECTION_STRING
}