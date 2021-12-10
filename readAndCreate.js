// read data from a file
const fs = require('fs')

fs.readFile('./data.json', (e, data) =>{
    fs.mkdir('./Data', (e) =>{
        fs.writeFile('./Data/objects.json',data, ()=>{
            console.log('data written');
        })
    } )
})
