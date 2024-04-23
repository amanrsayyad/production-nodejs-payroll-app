const express = require("express");
const {
  addCategory,
  getAllCategory,
  deleteCategory,
} = require("../controllers/categoryController");

//router object
const router = express.Router();

//routes
// CATEGORY || POST
router.post("/add-category", addCategory);

// CATEGORY || GET
router.get("/get-category", getAllCategory);

//Delete transection POST MEthod
router.post("/delete-category", deleteCategory);

//export
module.exports = router;
