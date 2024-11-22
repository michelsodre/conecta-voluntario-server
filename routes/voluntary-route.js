//imports
const express = require("express");
const voluntaryRouter = express.Router();
const {
  addNewVoluntary,
  fetchListOfVoluntary,
  fetchOneVoluntary,
  fetchOneVoluntaryById,
  updateVoluntary,
  deleteVoluntary,
} = require("../controller/voluntary-controller");

//CRUD Route Voluntários
voluntaryRouter.post("/add", addNewVoluntary);
voluntaryRouter.get("/", fetchListOfVoluntary);
voluntaryRouter.get("/onevoluntary", fetchOneVoluntary);
voluntaryRouter.get("/onevoluntarybyid", fetchOneVoluntaryById);
voluntaryRouter.put("/update/:id", updateVoluntary);
voluntaryRouter.delete("/delete/:id", deleteVoluntary);

//export
module.exports = voluntaryRouter;
