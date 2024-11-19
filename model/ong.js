const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ongSchema = new Schema({
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  description: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model("ong", ongSchema);
