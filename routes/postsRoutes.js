const express = require("express");

router = express.Router();

router.route("/").get((req, res) => {
	console.log(req.method);

	res.send("<h1>Hello</h1>");
});

router.route("/post").get((req, res) => {
	console.log(req.method);

	res.json({ succes: true, post: "lorem ipsum" });
});

router.route("/login").post((req, res) => {
	console.log("Posted");
	console.log(req.body);
});

module.exports = router;
