const fs = require('fs')

// console.log(fs);

fs.readFile('./index.js', 'utf-8', (err, data) => {
    if (err) console.log(err);
    console.log(data);
})