const mongoose = require("../config/database");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  name: { type: String, required: false },
  surname: { type: String, required: false },
  email: { type: String, required: false },
  company: { type: String, required: false },
  number: { type: Number, require: true },
  image: { data: Buffer, contentType: String, require: false },
  address: { type: String, require: false },
  group: { type: Number, require: false },
  created: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("contacts", TaskSchema);
