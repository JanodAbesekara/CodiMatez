
const config = {
  development: {
    username: "postgres",
    password: "2000Jd**",
    database: "CreateDB",
    host: "localhost",
    port: 5432,
    dialect: "postgres",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};


export default config;
