require("dotenv").config();
let express = require("express");
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))
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
	const messageStyle = process.env.MESSAGE_STYLE
  const message = "Hello json"
  console.log(messageStyle);
  res.json({message: messageStyle === "uppercase" ? message.toUpperCase() : message })
});

app.get("/:word/echo", function (req, res) {
	res.json({ echo: req.params.word });
});

app.get("/name", function (req, res) {
	res.json({ name: `${req.query.first} ${req.query.last}` });
});

app.post("/name", function (req, res) {
  const {first, last} = req.body
  res.json({name: `${first} ${last}`});
})

app.get(
	"/now",
	function (req, res, next) {
		req.time = new Date().toString();
		next();
	},
	function (req, res) {
		res.json({ time: req.time });
	}
);

module.exports = app;
