const http = require('http');
const Fullname = 'Korede Odeyemi, Solomon'


const server = http.createServer(function(req, res){
  res.writeHead(201,{'Content-Type': 'text/plain'});
  res.end(`Hello World, ${Fullname} is changing the world`)
})

server.listen(3050, '127.0.0.1');
console.log(`Hello World, ${Fullname} is changing the world`);
