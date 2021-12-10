// a simple server 
const http = require('http')

const server = http.createServer((req, res) => {
    
    res.write(`Hello my name is David and I'm changing the world`)
    res.end()
    
    console.log('response sent')
})

server.listen(3050, 'localhost', ()=>{
    console.log('server started...listening on port 3050');
})

