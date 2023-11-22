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
  let response;
  
	if (process.env.MESSAGE_STYLE === "uppercase") {
		response = "Hello json".toLocaleUpperCase()
	} else {
		response = "Hello json"
	}
  res.send({message: response})
});

module.exports = app;
