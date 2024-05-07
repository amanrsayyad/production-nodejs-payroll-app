const express = require("express");
const {
  getAllRecipient,
  addRecipient,
} = require("../controllers/recipientController");

//router object
const router = express.Router();

//routes
// CATEGORY || POST
router.post("/add-recipient", addRecipient);

// CATEGORY || GET
router.get("/get-recipient", getAllRecipient);

//export
module.exports = router;
