const dotenv = require("dotenv");
dotenv.config(); // this will load all the variables from .env file into the process.env object
// console.log(process.env);
const cors = require("cors");

const express = require("express");
const app = express();

app.listen(process.env.PORT, handleListen);

app.use(cors());

app.use(express.json()); // express.json() returns a middleware which takes the json form data and save it inside req.body
// DATABASE (MONGODB)

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
	"mongodb+srv://m001-ascyrax:Tempo%231orary.returns@herohours.r2yt7ia.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
	const collection = client.db("test").collection("devices");
	// perform actions on the collection object
	client.close();
});

// ROUTING
const hourRouter = require("./routers/hourRouter");

app.use("/api/hour/", hourRouter);

function handleListen(err) {
	if (err) console.log("err in server setup: " + err);
	else console.log("server is listening on port " + process.env.PORT);
}
