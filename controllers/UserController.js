import User from "../models/UserModel.js";

const createUser = async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    const user = await User.create({ firstName, lastName });
    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const getAllUser = async (req, res) => {
  try {
    const getAll = await User.findAll({});
    res.status(200).json({
      success: true,
      message: "Kullanıcılar Getirildi",
      getAll,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedData = req.body;

    if (!userId || !updatedData) {
      return res.status(400).json({
        success: false,
        message: "Eksik bilgi. Kullanıcı kimliği veya güncellenmiş veri eksik.",
      });
    }

    const updatedUser = await User.update(updatedData, {
      where: { id: userId },
    });

    if (updatedUser[0] === 1) {
      res.status(200).json({
        success: true,
        message: "Kullanıcı bilgileri güncellendi",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Kullanıcı bulunamadı veya bilgiler güncellenemedi.",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Kullanıcı bulunamadı." });
    }

    await user.destroy();
    res
      .status(200)
      .json({ success: true, message: "Kullanıcı başarıyla silindi." });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export { createUser, getAllUser, updateUser, deleteUser };
