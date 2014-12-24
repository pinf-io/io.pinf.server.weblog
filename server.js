
const PATH = require("path");
const FS = require("fs-extra");


require("io.pinf.server.www").for(module, __dirname, function(app, config, HELPERS) {

	app.get("/feed", function (req, res, next) {

		return res.end("Feed!");
	});
});
