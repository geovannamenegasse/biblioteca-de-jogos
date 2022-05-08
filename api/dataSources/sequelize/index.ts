import { Sequelize } from 'sequelize';

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;

const sequelize = new Sequelize(
  `mysql://${dbUser}:${dbPassword}@${dbHost}:3306/${dbName}`
);

export default sequelize;