import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();



const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres', 
    logging: false,
  });


  try {
    await sequelize.authenticate();
    console.log('Veritabanı bağlantısı başarılı!');
  } catch (error) {
    console.error('Veritabanı bağlantısı başarısız:', error);
  }
  export { sequelize };
