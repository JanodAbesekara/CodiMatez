import { Sequelize } from "sequelize";
import config from "./DBconfig.js"; 


const { username, password, database, host, port, dialect } =
  config.development;


const Connection = new Sequelize(database, username, password, {
  host,
  port,
  dialect,
  logging: false, 
});

export default Connection;
