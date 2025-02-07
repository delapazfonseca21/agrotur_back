const express = require("express");
const auth = require("../middleware/auth");
const { register, login } = require("../controllers/authController");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", (req, res) => {
    res.status(200).json({ message: "Welcome to your profile" });
  });

module.exports = router;
