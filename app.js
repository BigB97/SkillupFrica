let fs = require('fs')
fs.mkdirSync('data')
fs.readFile('readMe.txt', 'utf8', function(err, data){console.log('data')
})
fs.readFile('data.json', 'utf8', function(err, data) {
     fs.writeFile('./data/object.json', data, function(){})
      })
      fs.unlink('./data/object.json', function() {
    fs.rmdir('data', function(){})
  })
git 

 let http = require('http')
 let server = http.createServer(function(req, res){
         res.writeHead(201, {'Content-Type': 'text/plain'})
         res.end('Hello world, Ige Kayode Oluwole is changing the world')
     })
     console.log('you are now listening to port 3050')