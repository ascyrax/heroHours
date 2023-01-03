const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	console.log("welcome to heroHours api");
	res.send({ mssg: "hello from the heroHours api" });
});

module.exports = router;
