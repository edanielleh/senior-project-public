const express = require("express");
const router = express.Router();
const studentRoute = require('./allstudents.js');
const campusRoute = require('./allcampuses.js');


router.use("/routes/allstudents", studentRoute);
router.use("/routes/allcampuses", campusRoute);


module.exports = router;
