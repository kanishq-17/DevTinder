const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://Kanishq:Y9bT3mZ7wQ4nX8@cluster0.25juk.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
