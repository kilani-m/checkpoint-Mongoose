const mongoose = require("mongoose");

const personSchemas = new mongoose.Schema({
  name: { type: String, required: true, trim: true, lowercase: true },
  age: Number,
  favoriteFoods: [String],
});
const Person = mongoose.model("person", personSchemas);
module.exports = Person;
