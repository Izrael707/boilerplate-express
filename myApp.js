require("dotenv").config();
let express = require("express");
let app = express();

const staticPath = __dirname + "/public";

app.use(function (req, res, next) {
	console.log(`${req.method} ${req.path} - ${req.ip}`);
	next();
});
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
	res.json({
		message:
			process.env.MESSAGE_STYLE === "uppercase"
				? "Hello json".toUpperCase()
				: "Hello json",
	});
});

app.get(
	"/now",
	function (req, res, next) {
		req.time = new Date().toString();
    next()
	},
	function (req, res) {
		res.json({ time: req.time });
	}
);

module.exports = app;
