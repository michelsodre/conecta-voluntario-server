const mongoose = require("mongoose");
const Voluntary = require("../model/voluntary");

//CRUD
//CREATE Voluntário
const addNewVoluntary = async (req, res) => {
  const { name, birth_date, phone, email } = req.body;

  const newVoluntary = new Voluntary({
    name,
    birth_date,
    phone,
    email,
  });

  //   try {
  //     await newVoluntary.save();
  //   } catch (error) {
  //     console.log(error);
  //   }

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await newVoluntary.save(session);
    session.commitTransaction();
  } catch (error) {
    return res.send(500).json({ message: error });
  }
  return res.status(200).json({ newVoluntary });
};

//READ buscar Voluntários
const fetchListOfVoluntary = async (req, res) => {
  let voluntaryList;

  try {
    voluntaryList = await Voluntary.find();
  } catch (error) {
    console.log(error);
  }

  if (!voluntaryList) {
    return res.status(404).json({ message: "Sem Voluntários" });
  }

  return res.status(200).json({ voluntaryList });
};

//UPDATE editar Voluntário
const updateVoluntary = async (req, res) => {
  const id = req.params.id;
  const { name, birth_date, phone, email } = req.body;
  let currentVoluntaryUpdate;

  try {
    currentVoluntaryUpdate = await Ong.findByIdAndUpdate(id, {
      name,
      birth_date,
      phone,
      email,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Algo de errado ocorreu, tente novamente" });
  }

  if (!currentVoluntaryUpdate) {
    return res.status(500).json({ message: "Não foi possível prosseguir" });
  }
  return res.status(200).json({ currentVoluntaryUpdate });
};

//DELETE deletar Voluntário
const deleteVoluntary = async (req, res) => {
  const id = req.params.id;

  try {
    const findCurrentVoluntary = await Voluntary.findByIdAndDelete(id);
    if (!findCurrentVoluntary) {
      return res.status(404).json({ message: "Voluntário não encontrada" });
    }
    return res.status(200).json({ message: "Voluntário deletado" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Não foi possível deletar. Tente novamente" });
  }
};

module.exports = {
  addNewVoluntary,
  fetchListOfVoluntary,
  updateVoluntary,
  deleteVoluntary,
};
