//imports
const express = require("express");
const ongRouter = express.Router();
const {
  addNewOng,
  fetchListOfOngs,
  updateOng,
  deleteOng,
} = require("../controller/ong-controller");

//CRUD Route ONG
ongRouter.post("/add", addNewOng);
ongRouter.get("/", fetchListOfOngs);
ongRouter.put("/update/:id", updateOng);
ongRouter.delete("/delete/:id", deleteOng);

//export
module.exports = ongRouter;