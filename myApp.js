require("dotenv").config();
let express = require("express");
let app = express();

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
	const text = "Hello json";
	res.json({
		message:
			process.env.MESSAGE_STYLE === "uppercase" ? text.toUpperCase() : text,
	});
});

module.exports = app;
