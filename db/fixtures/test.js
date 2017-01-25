const fs = require('fs')
const arr = fs.readFileSync('test.txt').toString().trim().split("\r\n")

console.log(arr);
