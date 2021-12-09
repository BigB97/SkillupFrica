var fs = require('fs');


var readMe = fs.readFileSync('data.json');
// console.log(readMe) 
fs.writeFileSync('object.json', readMe);

