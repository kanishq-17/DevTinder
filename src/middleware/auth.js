const AdminAuth = (req, res, next) => {
  const token = "5b4a3ga";
  const isAdminAuth = token === "5b4a3ga";

  if (!isAdminAuth) {
    res.status(401).send("Unauthorized Request !");
  } else {
    console.log("Admin Authorized");
    next();
  }
};

const UserAuth = (req, res, next) => {
  const token = "hgi892";
  const isUserAuth = token === "hgi892";

  if (!isUserAuth) {
    res.status(401).send("Unauthorized Request !");
  } else {
    console.log("User Authorized");
    next();
  }
};

module.exports = { AdminAuth, UserAuth};
