const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const voluntarySchema = new Schema({
  name: {
    type: String,
  },
  birth_date: {
    type: Date,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model("voluntary", voluntarySchema);
