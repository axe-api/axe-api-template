import { Knex } from "knex";
import { IDatabaseConfig } from "axe-api";

const config: IDatabaseConfig = {
  client: process.env.DB_CLIENT || "mysql",
  connection: {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "user",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_DATABASE || "database",
    searchPath: [process.env.DB_USER || "user", "public"],
    filename: `${process.env.DB_DATABASE}.sqlite`,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
} as Knex.Config;

export default config;
