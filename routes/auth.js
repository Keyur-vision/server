const express = require("express");
const router = express.Router();
const { signIn } = require("../controller/authontroller.js");

router.post("/login", signIn)

module.exports = router

