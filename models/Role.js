import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.js";

class Role extends Model {}

Role.init(
  {
    

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: 'role',
  }
);

sequelize.sync({ force: false })
  .then(() => {
    console.log('Roller tablosu senkronize edildi.');
    
    Role.findOrCreate({ where: { name: 'admin' } });
    Role.findOrCreate({ where: { name: 'user' } });
    Role.findOrCreate({ where: { name: 'yönetici' } });
  })
  .catch((error) => {
    console.error('Hata:', error);
  });

export default Role;
