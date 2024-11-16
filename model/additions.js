const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const additionsSchema = new Schema({
  id_work: {
    type: String,
  },
  id_voluntary: {
    type: String,
  },
  submit_date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
  },
});

module.exports = mongoose.model("additions", additionsSchema);
