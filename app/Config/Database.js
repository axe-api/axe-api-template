export default {
  client: process.env.DB_CLIENT,
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    searchPath: [process.env.DB_USER, "public"],
    filename: `${process.env.DB_DATABASE}.sqlite`,
  },
};
