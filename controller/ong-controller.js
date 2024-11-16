const mongoose = require("mongoose");
const Ong = require("../model/ong");

//CRUD
//CREATE Ong
const addNewOng = async (req, res) => {
  const { name, phone, email, description } = req.body;

  const newOng = new Ong({
    name,
    phone,
    email,
    description,
  });

  //   try {
  //     await newOng.save();
  //   } catch (error) {
  //     console.log(error);
  //   }

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await newOng.save(session);
    session.commitTransaction();
  } catch (error) {
    return res.send(500).json({ message: error });
  }
  return res.status(200).json({ newOng });
};

//READ buscar Ongs
const fetchListOfOngs = async (req, res) => {
  let ongList;

  try {
    ongList = await Ong.find();
  } catch (error) {
    console.log(error);
  }

  if (!ongList) {
    return res.status(404).json({ message: "Sem ONGs" });
  }

  return res.status(200).json({ ongList });
};

//UPDATE editar Ong
const updateOng = async (req, res) => {
  const id = req.params.id;
  const { name, phone, email, description } = req.body;
  let currentOngUpdate;

  try {
    currentOngUpdate = await Ong.findByIdAndUpdate(id, {
      name,
      phone,
      email,
      description,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Algo de errado ocorreu, tente novamente" });
  }

  if (!currentOngUpdate) {
    return res.status(500).json({ message: "Não foi possível prosseguir" });
  }
  return res.status(200).json({ currentOngUpdate });
};

//DELETE deletar Ong
const deleteOng = async (req, res) => {
  const id = req.params.id;

  try {
    const findCurrentOng = await Ong.findByIdAndDelete(id);
    if (!findCurrentOng) {
      return res.status(404).json({ message: "ONG não encontrada" });
    }
    return res.status(200).json({ message: "ONG deletada" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Não foi possível deletar. Tente novamente" });
  }
};

module.exports = {
  addNewOng,
  fetchListOfOngs,
  updateOng,
  deleteOng,
};
