const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log("db is successfully connected");
  } catch (error) {
    console.log("connected to db is failed");
  }
};
module.exports = connectDb;