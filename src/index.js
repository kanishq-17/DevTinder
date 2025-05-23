const express = require("express");
const app = express();
const connectDB = require("./config/database");
const User = require("./models/User");

const PORT = 3000;

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Kanishq",
    lastName: "Sodhani",
    username: "virusbaba",
    email: "virusbaba017@gmail.com",
    age: 20,
    gender: "Male",
  });

  try {
    await user.save();
    console.log("User Added Successfully !!");
    res.json(user);
  } catch (error) {
    res.status(400).send("Error saving the user", error.message);
  }
});

connectDB()
  .then(() => {
    console.log("DB connected successfully");
    app.listen(PORT, () => {
      console.log("Server is running on Port:", PORT);
    });
  })
  .catch((err) => console.error("DB Connection error", err));
