const express = require("express");
const ConnectDB = require("./config/db");
const User = require("./models/User");

const PORT = 3000;

const app = express();

app.use(express.json());

app.get("/getUser", async (req, res) => {
  const username = req.body.username;

  try {
    const user = await User.find({ username: username });

    if (user.length === 0) {
      res.status(400).send({ message: "Something went wrong" });
    } else {
      console.log("User Found");
      res.send(user);
    }
  } catch (err) {
    res.status(500).send({
      error: err.message,
    });
  }
});

app.post("/signup", async (req, res) => {
  try {
    // creating new instance of user
    const user = new User(req.body);

    // saving user to database
    const savedUser = await user.save();

    // user created successfully message sent to console
    console.log("User Created Successfully");

    // creating user and sending response
    res.status(201).send({
      message: "User Created",
      User: {
        id: savedUser._id,
        name: savedUser.firstName,
        email: savedUser.email,
      },
    });
  } catch (errr) {
    res.status(500).send({
      error: errr.message,
    });
  }
});

ConnectDB().then(() => {
  console.log("DB Connected Successfully !");
  app.listen(PORT, () => console.log("Server is running on Port:", PORT));
});
