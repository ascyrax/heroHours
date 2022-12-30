const express = require("express");

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");
app.listen(4000);

const controHome = require("./controllers/controHome");

app.get("/", (req, res) => controHome.);
