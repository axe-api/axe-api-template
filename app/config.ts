import { LogLevels, IApplicationConfig } from "axe-api";
import path from "path";

const config: IApplicationConfig = {
  prefix: "api",
  env: process.env.NODE_ENV || "production",
  port: process.env.APP_PORT ? parseInt(process.env.APP_PORT) : 3000,
  logLevel: LogLevels.INFO,
  database: {
    client: process.env.DB_CLIENT || "mysql",
    connection: {
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "user",
      password: process.env.DB_PASSWORD || "password",
      database: process.env.DB_DATABASE || "database",
      filename: path.join(__dirname, "..", `${process.env.DB_DATABASE}.sqlite`), // For SQLite
    },
    searchPath: [process.env.DB_USER || "user", "public"],
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

export default config;
