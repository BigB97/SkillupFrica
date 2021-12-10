// delete file and folder
const fs = require('fs')

fs.unlink('./Data/objects.json', ()=>{
    console.log('file deleted')
    fs.rmdir('./Data', ()=>{
        console.log('folder deleted');
    })
})
