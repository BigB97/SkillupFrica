const fs = require("fs");

// To readfile

fs.mkdir("Data", ()=>{
   console.log("Data created")
});

//  To writefile

fs.readFile("data.json", "utf8", function(err, data){
    fs.writeFile("./Data/Object.json", data, () => {
        console.log('object.json created')
    })
})

//  To deletefile
   
fs.unlink("./Data/Object.json", () =>{
    fs.rmdir("Data", ()=>{});
})

// To create server
 const http = require('http');

 const server = http.createServer((req, res) =>{
    res.setHeader(201, "Content-type", "text/plain");
    res.write("Hello World, Okachanma Johnmark is making global impact");
 });

 server.listen(3050, "localhost", () =>{
     console.log("listening for requests on port 3050")
 });