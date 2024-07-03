import knex from "knex";

const { DATABASE_URL, DB_HOST, DB_PORT, DB_USER, DB_PWD, DB_DBNAME } = process.env

const knexInstance = knex({
    client: "pg",
    connection: {
        connectionString: DATABASE_URL,
        host: DB_HOST,
        port: DB_PORT ? parseInt(DB_PORT) : 5432,
        user: DB_USER,
        database: DB_DBNAME,
        password: DB_PWD,
    },
});

export { knexInstance as default, knexInstance }
