const UserAuth = (req, res, next) => {
  const token = "createuser";
  const isUserSignedIn = token === "createuser";

  if (!isUserSignedIn) {
    res.status(401).send("Unauthorized Access !!");
  } else {
    next();
  }
};

module.exports = { UserAuth };
