var http = require("http");

var server = http.createServer(function(req, res) {
    res.writeHead(201, { "content-type": "text/plain" });
    res.end("Hello World, {Ozioma Nwankwo} is changing the world");
});
server.listen(3050, "127.0.0.1");
console.log("cheesy, easy and great listening to 3050");