const express = require("express");

const app = express();

router.post("/signup", function(req, res, next) {
  res.send("I am in POST signup");
});
