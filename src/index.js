const express = require("express");
const { AdminAuth, UserAuth } = require("./middleware/auth");

const app = express();

// MIDDLEWARES
// ADMIN
app.use("/admin", AdminAuth);

// USER
app.use("/user", UserAuth);

app.get("/admin/allUser", (req, res) => {
  res.send("All Users Detail Fetched!");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("User Deleted!");
});

app.get("/user/getUser", (req, res) => {
  const { name, password } = req.query;
  res.send(`Name: ${name}\nPassword: ${password}`);
});

app.listen(3000, () => {
  console.log("Server is running on port: 3000");
});
