var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/burgers", function(req, res) {
  burger.all(function(data) {
    
    res.render("index", {burger_data: burgerData});
  });
});

router.post("/api/burgers", function(req, res) {

  burger.create(req.body.burger_name, function(result) {
    res.redirect("/");
    });
});

router.put("/api/burger/:id", function(req, res) {
  burger.update(req.params.id, function(result) {
    console.log(result);
    res.sendStatus(200);
  });
});


module.exports = router;
