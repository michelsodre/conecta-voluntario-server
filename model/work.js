const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workSchema = new Schema({
  id_ong: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  requirements: {
    type: String,
  },
  creation_date: {
    type: Date,
    default: Date.now,
  },
  address: {
    type: String,
  },
});

module.exports = mongoose.model("work", workSchema);
