const mongoose = require("mongoose");

const db_Connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/DataBase");
    console.log("connect with succes ...");
  } catch (error) {
    console.log(error);
  }
};
module.exports = db_Connect;
