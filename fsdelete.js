var fs = require('fs');

fs.unlinkSync('data/user.db');
fs.rmdirSync('data');