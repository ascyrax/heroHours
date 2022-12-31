const express = require("express");
const router = express.Router();

const hourInputController = require("../controllers/hourInputController");

router.post("/userInput", hourInputController);

module.exports = router;
