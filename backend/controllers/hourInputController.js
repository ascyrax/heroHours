function hourInputController(req, res) {
	console.log(req.body);
	res.json({ mssg: "wow, post working still" });
}

module.exports = hourInputController;
