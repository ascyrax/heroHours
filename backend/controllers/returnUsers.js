const userModel = require("../schema/userSchema");

async function returnUsers(req, res) {
	let users = await userModel.find({});
	res.json({ mssg: "user data returned", users: users });
}

module.exports = returnUsers;
