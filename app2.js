const path = require("path");
const express = require("express");
const app = express();
const str = require("./bin/str");

const root = path.join(__dirname, "./build");
app.use(express.static(root));
app.disable('x-powered-by');

app.use("/", (req, res, next) => {
	if(!req.originalUrl.includes('.')){
		let updated = str.replace("__OG_TITLE__", `${req.originalUrl.replace('/',' ')}`);
		updated = updated.replace("__MAIN_TITLE__", `${req.originalUrl.replace('/',' ')}`);
		res.send(updated);
	}
	next();
});
//
app.use(express.static(path.join(__dirname, "./build")));
module.exports = app;