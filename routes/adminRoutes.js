const express = require("express");
const {
  registerController,
  loginController,
  updateUserController,
  requireSingIn,
} = require("../controllers/adminController");

//router object
const router = express.Router();

//routes
// REGISTER || POST
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

//UPDATE || PUT
router.put("/update-admin", requireSingIn, updateUserController);

//export
module.exports = router;
