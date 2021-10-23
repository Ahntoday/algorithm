const fs = require('fs');
const input = fs.readFileSync("../../test.txt").toString().trim().split('\n');

console.log(input[0].length);