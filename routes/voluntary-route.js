//imports
const express = require("express");
const voluntaryRouter = express.Router();
const {
  addNewVoluntary,
  fetchListOfVoluntary,
  updateVoluntary,
  deleteVoluntary,
} = require("../controller/voluntary-controller");

//CRUD Route Voluntários
voluntaryRouter.post("/add", addNewVoluntary);
voluntaryRouter.get("/", fetchListOfVoluntary);
voluntaryRouter.put("/update/:id", updateVoluntary);
voluntaryRouter.delete("/delete/:id", deleteVoluntary);

//export
module.exports = voluntaryRouter;
