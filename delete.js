var fs = require('fs')
fs.unlink('./Data/object.json', function(){
    fs.rmdir('Data', () => {});

})