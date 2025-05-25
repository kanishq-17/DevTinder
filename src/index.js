const express = require("express");
const ConnectDB = require("./config/db");
const User = require("./models/User");

const PORT = 3000;

const app = express();

// middleware
app.use(express.json());

// Post user to database
app.post("/signup", async (req, res) => {
  try {
    const user = new User(req.body);

    const savedUser = await user.save();

    if (user) {
      res.status(201).send({
        message: "User Created",
        User: {
          id: savedUser._id,
          name: savedUser.firstName,
          email: savedUser.email,
        },
      });
    } else {
      res.status(400).send("Something Went Wrong\nCannot Created User");
    }
  } catch (err) {
    res.status(500).send({ Error: err.message });
  }
});

// Get user from database
app.get("/getUsers", async (req, res) => {
  const { username, email } = req.query;
  try {
    const allUser = await User.find({ username, email });

    if (allUser.length !== 0) {
      res.status(302).send(allUser);
    } else {
      res.status(404).send("Users Data Not Found");
    }
  } catch (err) {
    res.status(500).send({
      Error: err.message,
    });
  }
});

// Delete user from databse
app.delete("/deleteUser", async (req, res) => {
  try {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const deletedUser = await User.findOneAndDelete({
      firstName: firstName,
      lastName: lastName,
      email: email,
    });

    if (deletedUser) {
      res.status(200).send({
        message: "User Deleted Successfully",
        User: {
          deletedUser,
        },
      });
    } else {
      res.status(404).send("Users Data Not Found");
    }
  } catch (err) {
    res.status(500).send({
      Error: err.message,
    });
  }
});

// Update user in database
app.patch("/updateUser", async (req, res) => {
  try {
    // const userId = req.body.userId;
    const { username, password } = req.query;
    const data = req.body;

    const ALLOWED_UPDATES = ["username", "password", "photo", "gender"];

    const isUpdateAllowed = Object.keys(data).every((k) =>
      ALLOWED_UPDATES.includes(k)
    );

    if (!isUpdateAllowed) {
      throw new Error("Update not allowed");
    }

    if (data?.username) {
      const existingUser = await User.findOne({ username: data.username });
      if (existingUser && existingUser.username !== username) {
        return res.status(400).send({ Error: "Username already exists!" });
      }
    }

    const updatedUser = await User.findOneAndUpdate(
      { username, password },
      data,
      {
        returnDocument: "after",
      }
    );

    if (updatedUser) {
      res.status(200).send({
        message: "User Updated Successfully",
        User: {
          updatedUser,
        },
      });
    } else {
      res.status(404).send("Users Data Not Found");
    }
  } catch (err) {
    res.status(500).send({
      Error: err.message,
    });
  }
});

ConnectDB().then(() => {
  console.log("DB Connected Successfully");
  app.listen(PORT, () => {
    console.log("Server is running on Port:", PORT);
  });
});
