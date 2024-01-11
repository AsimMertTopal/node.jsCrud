import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.js";

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },

  {
    sequelize,
    modelName: "product",
  }
);

Product.sync({ force: false })
  .then(() => console.log("Product Tablosu Senkronize edildi"))
  .catch((error) => {
    console.error("Hata:", error);
  });

export default Product;