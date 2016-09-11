var express = require("express");
var https = require("https");
var fs = require("fs");
var app = express();
app.get("/", function(request, response) {
 response.send("Welcome to ghost’s homepage!");
});
var httpsOptions = {
 key: fs.readFileSync("https/sample.key"),
 cert: fs.readFileSync("https/sample.crt")
};
https.createServer(httpsOptions, app).listen(3000); 