var express = require("express");
var router = express.Router();
var Person = require("../models/Person");

/* GET página de listagem de pessoas 
  http://localhost:4000/list
*/

router.get("/list", function (req, res, next) {
  Person.find().then(function (alcool) {
    res.render("list", { title: "Listagem de Pessoas", alcool: alcool });
    console.log(alcool);
  });
});

module.exports = router;
