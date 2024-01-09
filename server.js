// npm init -y
// npm init
// npm i express
// npm i nodemon -D
// npm i colors
// npm i dotenv
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config({
	path: "./config/config.env",
});

const app = express();

app.use(cors({ exposedHeaders: "*" }));

app.get("/", (req, res) => {
	res.json({ success: true, user: "Ganbold" });
});
app.get("/posts", (req, res) => {
	res.json({ success: true, user: "posts" });
});
app.get("*", (req, res) => {
	res.send("<h1>NOT FOUND</h1>");
});

app.listen(process.env.PORT, () => {
	console.log(
		`Manai server ${process.env.PORT} port deer aslaa`.rainbow.bold
	);
});
