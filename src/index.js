const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send("Welcome user! Enjoy if you can 🥰");
});

app.post("/user", (req, res) => {
  res.send("You have contacted us and we updated");
});

app.delete("/user", (req, res) => {
  res.send("User Deleted 🫡");
});

app.use("/test", (req, res) => {
  res.send("Server running 🏃‍♂️");
});

app.listen(3000, () => {
  console.log("Server is listening on Port: 3000");
});
