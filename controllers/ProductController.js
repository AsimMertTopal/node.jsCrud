import Product from "../models/ProductModel.js";

const createProduct = async (req, res) => {
  const { name, price, stock } = req.body;
  try {
    const createProduct = await Product.create({
      name,
      price,
      stock,
    });
    res.status(201).json({
      succes: true,
      message: "Ürün Oluşturuldu",
      createProduct,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const productBody = req.body;

  try {
    const updated = await Product.update(productBody, {
      where: { id: productId },
    });

    if (updated[0] === 1) {
      res.status(200).json({
        succes: true,
        message: "Ürün Güncellendi",
        updated,
      });
    }
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const deleted = await Product.findByPk(productId);
    deleted.destroy();
    res.status(200).json({
      succes: true,
      message: "Ürün Silindi !",
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};

const getAllProduct = async (req, res) => {
  try {
    const getAll = await Product.findAll({});
    res.status(200).json({
      succes: true,
      message: "Ürünler Getirildi",
      getAll,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};

export { createProduct, updateProduct, deleteProduct, getAllProduct };
