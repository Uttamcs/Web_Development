const express = require("express");
const router = express.Router();
const { handleUserSignUp, handleUserLogin , handleUserLogout } = require("../controller/user")


// Home Route
router.get("/", (req, res) => {
  return res.render("home", { id: null, error: null });
});

// Signup Routes
router.get("/signup", (req, res) => {
  return res.render("signUp", { error: null });
});
router.post("/signup", handleUserSignUp);
router.post("/login", handleUserLogin);
router.get("/logout", handleUserLogout);




router.get("/login", (req, res) => {
  return res.render("login", { error: null });
});



module.exports = router;
