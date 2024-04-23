const express = require("express");
const {
  registerController,
  loginController,
  updateUserController,
  requireSingIn,
  getAllUsers,
} = require("../controllers/userController");

//router object
const router = express.Router();

//routes
// REGISTER || POST
router.post("/user-register", registerController);

// LOGIN || POST
router.post("/user-login", loginController);

//UPDATE || PUT
router.put("/update-user", requireSingIn, updateUserController);

//GET All Users
router.get("/get-users", getAllUsers);

//export
module.exports = router;
