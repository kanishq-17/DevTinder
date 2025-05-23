const express = require("express");

const app = express();

app.use("/home", (req, res) => {
  res.send("go to home and start coding");
});

app.use("/test", (req, res) => {
  res.send("Get ready for fuc*ing suprise test");
});

app.use("/", (req, res) => {
  res.send("Hello from Dashboard!");
});

app.listen(3000, () => {
  console.log("Server is listening on Port: 3000");
});
