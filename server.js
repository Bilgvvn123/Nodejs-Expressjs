const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");

const postsRoutes = require("./routes/postsRoutes");

dotenv.config({
	path: "./config/config.env",
});

const app = express();

// req - request
// res - response
// CRUD -> Create - post Read - get Update - put, patch Delete - delete

app.use(express.json());
app.use("/posts", postsRoutes);

app.listen(process.env.PORT, () => {
	console.log(
		`Manai server ${process.env.PORT} port deer aslaa`.rainbow.bold
	);
});
