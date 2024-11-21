//imports
const express = require("express");
const additionRouter = express.Router();
const {
  addNewAddition,
  fetchListOfAdditions,
  fetchVoluntaryAdditions,
  updateAddition,
  deleteAddition,
  deleteAllAddition,
  deleteAllAdditionWork,
} = require("../controller/additions-controller");

//CRUD Route Inscrição
additionRouter.post("/add", addNewAddition);
additionRouter.get("/", fetchListOfAdditions);
additionRouter.get("/myadditions", fetchVoluntaryAdditions);
additionRouter.put("/update/:id", updateAddition);
additionRouter.delete("/delete/:id", deleteAddition);
additionRouter.delete("/deletemany/:id_voluntary", deleteAllAddition);
additionRouter.delete("/deletemanywork/:id_work", deleteAllAdditionWork);
//export
module.exports = additionRouter;
