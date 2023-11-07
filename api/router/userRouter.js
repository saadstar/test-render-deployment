const express = require("express");
const router = express.Router();
const { register, login, current } = require("../controllers/userController");
router.post("/register", register).post("/login", login).get("/current", current);

module.exports = router;