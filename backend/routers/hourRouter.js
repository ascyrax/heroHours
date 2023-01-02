const express = require("express");
const router = express.Router();

const hourInputController = require("../controllers/hourInputController");
const returnUsers = require("../controllers/returnUsers");

router.post("/userInput", hourInputController);

router.get("/users", returnUsers);

module.exports = router;
