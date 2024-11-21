const mongoose = require("mongoose");
const Ong = require("../model/ong");

//CRUD
//CREATE Ong
const addNewOng = async (req, res) => {
  const { name, phone, email, description, password } = req.body;

  const newOng = new Ong({
    name,
    phone,
    email,
    description,
    password,
  });

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
//Buscar Uma Ongs
const fetchOneOngs = async (req, res) => {
  const { email } = req.query;
  let oneOng;

  try {
    oneOng = await Ong.findOne({ email });
    console.log(oneOng);
  } catch (error) {
    console.log(error);
  }

  if (!oneOng) {
    return res.status(404).json({ message: "Sem ONGs" });
  }

  return res.status(200).json({ oneOng });
};
const fetchOngID = async (req, res) => {
  const { _id } = req.query;
  let oneOng;

  try {
    oneOng = await Ong.findOne({ _id });
    console.log(oneOng);
  } catch (error) {
    console.log(error);
  }

  if (!oneOng) {
    return res.status(404).json({ message: "Sem ONGs" });
  }

  return res.status(200).json({ oneOng });
};

//UPDATE editar Ong
const updateOng = async (req, res) => {
  const id = req.params.id;
  const { name, phone, email, description, password } = req.body;
  let currentOngUpdate;

  try {
    currentOngUpdate = await Ong.findByIdAndUpdate(
      id,
      {
        name,
        phone,
        email,
        description,
        password,
      },
      { new: true }
    );
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
  fetchOneOngs,
  fetchOngID,
  updateOng,
  deleteOng,
};
