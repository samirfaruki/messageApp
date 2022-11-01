var express = require("express");
var router = express.Router();

/* GET home page. */
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "Mini Messageboard", messages: messages });
});

router.post("/new", function (req, res, next) {
  let data = req.body;

  Object.assign(data, { added: new Date() });

  messages.push(data);

  res.redirect("/");
});
module.exports = router;
