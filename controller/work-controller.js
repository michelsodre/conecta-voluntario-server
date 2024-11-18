const mongoose = require("mongoose");
const Work = require("../model/work");

//CRUD
//CREATE Vaga
const addNewWork = async (req, res) => {
  const { id_ong, title, description, requirements, address } = req.body;
  const currentDate = new Date();

  const newWork = new Work({
    id_ong,
    title,
    description,
    requirements,
    creation_date: currentDate,
    address,
  });

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await newWork.save(session);
    session.commitTransaction();
  } catch (error) {
    return res.send(500).json({ message: error });
  }
  return res.status(200).json({ newWork });
};

//READ buscar Vagas
const fetchListOfWork = async (req, res) => {
  let workList;

  try {
    workList = await Work.find();
  } catch (error) {
    console.log(error);
  }

  if (!workList) {
    return res.status(404).json({ message: "Sem Vagas" });
  }

  return res.status(200).json({ workList });
};

//UPDATE editar Vaga
const updateWork = async (req, res) => {
  const id = req.params.id;
  const { title, description, requirements, address } = req.body;
  let currentWorkUpdate;

  try {
    currentWorkUpdate = await Work.findByIdAndUpdate(id, {
      title,
      description,
      requirements,
      address,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Algo de errado ocorreu, tente novamente" });
  }

  if (!currentWorkUpdate) {
    return res.status(500).json({ message: "Não foi possível prosseguir" });
  }
  return res.status(200).json({ currentWorkUpdate });
};

//DELETE deletar Vaga
const deleteWork = async (req, res) => {
  const id = req.params.id;

  try {
    const findCurrentWork = await Work.findByIdAndDelete(id);
    if (!findCurrentWork) {
      return res.status(404).json({ message: "Vaga não encontrada" });
    }
    return res.status(200).json({ message: "Vaga deletada" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Não foi possível deletar. Tente novamente" });
  }
};

module.exports = {
  addNewWork,
  fetchListOfWork,
  updateWork,
  deleteWork,
};
