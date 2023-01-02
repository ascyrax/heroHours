const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		lowercase: true,
		required: true,
	},
	hours: {
		type: [Number],
		required: true,
	},
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
