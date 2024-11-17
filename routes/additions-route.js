//imports
const express = require("express");
const additionRouter = express.Router();
const {
  addNewAddition,
  fetchListOfAdditions,
  updateAddition,
  deleteAddition,
} = require("../controller/additions-controller");

//CRUD Route Inscrição
additionRouter.post("/add", addNewAddition);
additionRouter.get("/", fetchListOfAdditions);
additionRouter.put("/update/:id", updateAddition);
additionRouter.delete("/delete/:id", deleteAddition);

//export
module.exports = additionRouter;
