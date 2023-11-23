let express = require("express");
let app = express();
require("dotenv").config();

const staticPath = __dirname + "/public";
// LESSON THREE
app.use("/public", express.static(staticPath));

// LESSON ONE
// app.get("/", function (req, res) {
// 	res.send("Hello Express");
// });

// LESSON TWO
app.get("/", function (req, res) {
	const filePath = __dirname + "/views/index.html";
	res.sendFile(filePath);
});

// LESSON FOUR
app.get("/json", function (req, res) {
	let str = "";
	if (process.env.MESSAGE_STYLE === "uppercase") {
		str = "Hello json".toUpperCase();
	} else if (process.env.MESSAGE_STYLE !== "uppercase") {
		str = "Hello json";
	}
	res.json({ message: str });
});

module.exports = app;
