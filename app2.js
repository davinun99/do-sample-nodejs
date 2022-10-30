const path = require("path");
const express = require("express");
const app = express();
const str = require("./bin/str");

const root = path.join(__dirname, "./build");
app.use(express.static(root));
app.disable('x-powered-by');

app.use("/", (req, res, next) => {
	if(!req.originalUrl.includes('.')){
		const updated = str.replace("__PAGE_META__", `<meta property="og:title" content="DAVIDTEST" /><title>${req.originalUrl.substring(1)}</title>`);
		res.send(updated);
	}
	next();
});
//
app.use(express.static(path.join(__dirname, "./build")));
module.exports = app;