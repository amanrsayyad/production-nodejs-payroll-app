const express = require("express");
const {
  pressAttendence,
  attendenceData,
} = require("../controllers/attendenceController");

//router object
const router = express.Router();

//routes
// ATTENDENCE || POST
router.post("/add-attendence", pressAttendence);

// ATTENDENCE || GET
router.get("/get-attendence", attendenceData);

//export
module.exports = router;