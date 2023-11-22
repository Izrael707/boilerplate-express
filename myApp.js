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
	messageStyle = process.env.MESSAGE_STYLE;
	if (messageStyle === "uppercase") {
		res.send({ message: "HELLO JSON" });
	} else {
		res.send({ message: "Hello json" });
	}
});

module.exports = app;
