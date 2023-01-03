const dotenv = require("dotenv");
dotenv.config(); // this will load all the variables from .env file into the process.env object
// console.log(process.env);
const cors = require("cors");

const express = require("express");
const app = express();

app.listen(process.env.PORT || 7000, handleListen);

app.use(cors());

app.use(express.json()); // express.json() returns a middleware which takes the json form data and save it inside req.body

// DATABASE (MONGODB)
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

main().catch((err) => console.log(err));
async function main() {
	await mongoose.connect(process.env.CLOUD_DB, () =>
		console.log("connected to db")
	),
		(e) => console.log(e);
}

// ROUTING
const hourRouter = require("./routers/hourRouter");

app.use("/api/hour/", hourRouter);

function handleListen(err) {
	if (err) console.log("err in server setup: " + err);
	else console.log("server is listening on port " + process.env.PORT);
}
