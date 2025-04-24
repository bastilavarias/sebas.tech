require("dotenv").config();

const client = "mysql2";

const connection = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
};

const configs = {
    client,
    connection,
    migrations: {
        directory: __dirname + "/database/migrations",
    },
    seeds: {
        directory: __dirname + "/database/seeds",
    },
};

module.exports = {
    development: {
        ...configs,
    },

    production: {
        ...configs,
    },
};