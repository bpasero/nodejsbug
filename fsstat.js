var fs = require('fs');

var stat = fs.statSync('data/user.db');
console.log(stat); 