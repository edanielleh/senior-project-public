const express = require("express");
const router = express.Router();

var Campuses = require('../db/models/campuses.js');

router.get("/", function(req, res, next){
   Campuses.findAll()
   .then(function(allcampuses){
    res.send(allcampuses);
   })
   .catch(next);
});


module.exports = router;