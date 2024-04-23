const express = require("express");
const {
  checkIn,
  attendenceData,
} = require("../controllers/attendenceController");

//router object
const router = express.Router();

//routes
// ATTENDENCE || POST
router.post("/add-attendence", checkIn);

// ATTENDENCE || GET
router.get("/get-attendence", attendenceData);

//export
module.exports = router;