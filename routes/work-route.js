//imports
const express = require("express");
const workRouter = express.Router();
const {
  addNewWork,
  fetchListOfWork,
  updateWork,
  deleteWork,
} = require("../controller/work-controller");

//CRUD Route Vagas
workRouter.post("/add", addNewWork);
workRouter.get("/", fetchListOfWork);
workRouter.put("/update/:id", updateWork);
workRouter.delete("/delete/:id", deleteWork);

//export
module.exports = workRouter;
