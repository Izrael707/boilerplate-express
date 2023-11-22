let express = require("express");
let app = express();

// LESSON ONE
// app.get("/", function (req, res) {
// 	res.send("Hello Express");
// });

// LESSON TWO
app.get("/", function (req, res) {
	filePath = __dirname + "/views/index.html";
	res.sendFile(filePath);
});

module.exports = app;
