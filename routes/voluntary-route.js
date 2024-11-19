//imports
const express = require("express");
const voluntaryRouter = express.Router();
const {
  addNewVoluntary,
  fetchListOfVoluntary,
  fetchOneVoluntary,
  updateVoluntary,
  deleteVoluntary,
} = require("../controller/voluntary-controller");

//CRUD Route Voluntários
voluntaryRouter.post("/add", addNewVoluntary);
voluntaryRouter.get("/", fetchListOfVoluntary);
voluntaryRouter.get("/onevoluntary", fetchOneVoluntary);
voluntaryRouter.put("/update/:id", updateVoluntary);
voluntaryRouter.delete("/delete/:id", deleteVoluntary);

//export
module.exports = voluntaryRouter;
