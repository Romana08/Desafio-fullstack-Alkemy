import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('my_api', 'postgres', '1108', {
  host: 'localhost',
  dialect: 'postgres',
});
