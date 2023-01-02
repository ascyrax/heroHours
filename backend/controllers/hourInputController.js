const userModel = require("../schema/userSchema");

function hourInputController(req, res) {
	handleUserInput(req.body);

	res.json({ mssg: "user input posted" });
}
async function handleUserInput({ username, hours }) {
	const similarUser = await userModel.find({ username });
	if (similarUser.length) {
		console.log("user already exists");
		const document = await userModel.findOne({ username });
		document.hours.push(hours);
		await document.save();
	} else {
		console.log("new user created");
		const document = new userModel({ username, hours });
		await document.save();
	}
}
async function storeInputInDB({ username, hours }) {
	const user = new userModel({ username, hours });
	console.log(user);
	await user.save();
}

module.exports = hourInputController;
