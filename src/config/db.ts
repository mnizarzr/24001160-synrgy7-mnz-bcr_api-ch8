import knex from "knex";

const knexInstance = knex({
    client: "pg",
    connection: {
        database: "binar_cr",
        user: "root",
        password: "root",
        port: 5432,
    },
});

export { knexInstance as default, knexInstance }
