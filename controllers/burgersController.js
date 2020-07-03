//dependencies
var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

//initial get for the main page
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

//grab all burgers out of the DB and display to the page
router.get("/burgers", function(req, res) {
  burger.all(function(burgerData) {
    res.render("index", { burger_data: burgerData });
  });
});

//create new burger route
router.post("/burgers/create", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

//updating a burger -- used to go from non-devour to devour
router.put("/burgers/:id", function(req, res) {
  burger.update(req.params.id, function(result) {
    console.log(result);
    res.sendStatus(200);
  });
});

module.exports = router;
