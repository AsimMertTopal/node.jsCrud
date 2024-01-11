import { DataTypes, Model } from "sequelize";
import {sequelize} from "../config/db.js";

class Teacher extends Model {}

Teacher.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    branch: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
     
    },
  },
  {
    sequelize,
    modelName: "teacher",
  }
);

Teacher.sync({ force: false })
  .then(() => console.log("Teacher Tablosu Senkronize edildi"))
  .catch((error) => {
    console.error("Hata:", error);
  });

  
export default Teacher;
