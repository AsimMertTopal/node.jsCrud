import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db.js'; // Veritabanı bağlantısını içeri aktarın

class User extends Model {}

User.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
   
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, 
    modelName: 'User', 
  }
);



User.sync({ force: false }) 
  .then(() => {
    console.log('User tablosu senkronize edildi.');
  })
  .catch((error) => {
    console.error('Hata:', error);
  });


  

export default User;
