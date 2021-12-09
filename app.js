// let fs = require("fs");

// fs.mkdir("Data", function () {
//   fs.readFile("data.json", "utf8", function (err, data) {
//     console.log(data);
//     fs.writeFileSync("./Data/object.json", data);
//   });
// });

// fs.mkdirSync("Data");
// let read = fs.readFileSync("data.json", "utf8");
// fs.writeFileSync("./Data/object.json", read);

// fs.unlink("./Data/object.json", function () {
//   fs.rmdirSync("Data");
// // });

// fs.unlinkSync("./Data/object.json");
// fs.rmdirSync("Data");

// assignment 2

let http = require("http");

let server = http.createServer((req, res) => {
  res.writeHead(201, { "content-type": "text/plain" });
  res.end(`Hello World, Matthew Enyina is changing the world`);
});

server.listen(3050, "127.0.0.1");
console.log("now active on 3050");
