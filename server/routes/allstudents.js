const express = require("express");
const router = express.Router();
var app = express();

var Students = require('../db/models/students.js');

router.get("/", function(req, res, next){
   Students.findAll()
   .then(function(allstudents){
       //Returns the rendered HTML of a view via the callback function. It accepts an optional parameter that is an object containing local variables for the view. It is like res.render(), except it cannot send the rendered view to the client on its own.
    res.send(JSON.stringify(allstudents)); 
   })
   .catch(next);
});


module.exports = router;