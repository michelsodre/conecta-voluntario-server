const mongoose = require("mongoose");
const Addition = require("../model/additions");

//CRUD
//CREATE addition ou incrição na vaga
const addNewAddition = async (req, res) => {
  const { id_work, id_voluntary } = req.body;
  const currentDate = new Date();

  const newAddition = new Addition({
    id_work,
    id_voluntary,
    submit_date: currentDate,
  });

  //   try {
  //     await newAddition.save();
  //   } catch (error) {
  //     console.log(error);
  //   }

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await newAddition.save(session);
    session.commitTransaction();
  } catch (error) {
    return res.send(500).json({ message: error });
  }
  return res.status(200).json({ newAddition });
};

//READ buscar inscrições
const fetchListOfAdditions = async (req, res) => {
  let additionList;

  try {
    additionList = await Addition.find();
  } catch (error) {
    console.log(error);
  }

  if (!additionList) {
    return res.status(404).json({ message: "Sem inscrições" });
  }

  return res.status(200).json({ additionList });
};

//UPDATE editar inscrição
const updateAddition = async (req, res) => {
  const id = req.params.id;
  const { status } = req.body;
  let currentAdditionUpdate;

  try {
    currentAdditionUpdate = await Addition.findByIdAndUpdate(id, { status });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Algo de errado ocorreu, tente novamente" });
  }

  if (!currentAdditionUpdate) {
    return res.status(500).json({ message: "Não foi possível prosseguir" });
  }
  return res.status(200).json({ currentAdditionUpdate });
};

//DELETE deletar inscrição
const deleteAddition = async (req, res) => {
  const id = req.params.id;

  try {
    const findCurrentAddition = await Addition.findByIdAndDelete(id);
    if (!findCurrentAddition) {
      return res.status(404).json({ message: "Inscrição não encontrada" });
    }
    return res.status(200).json({ message: "Inscrição deletada" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Não foi possível deletar. Tente novamente" });
  }
};

module.exports = {
  addNewAddition,
  fetchListOfAdditions,
  updateAddition,
  deleteAddition,
};
