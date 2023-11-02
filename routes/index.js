var express = require("express");
var usersModel = require("./users");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { name: "" });
});

router.get("/create", async function (req, res) {
  const createdUser = await usersModel.create({
    username: "Adib",
    age: 15,
    email: "adibali.amway@gmail.com",
  });
  res.send("hello");
});

router.get("/users", function (req, res) {
  res.send("hello baby");
});

module.exports = router;
