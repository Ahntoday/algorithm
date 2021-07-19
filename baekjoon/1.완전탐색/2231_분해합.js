const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

// const input = 216;
let result = [];
function checkSum(n) {
    let arr = n.toString().split('');
    return n + arr.reduce((acc, num) => acc += parseInt(num, 10), 0);
}

for (let i = 1; i <= input; i++) {
    if (checkSum(i) === input) {
        result.push(i);
    }
}

if (result.length != 0) {
    console.log(Math.min.apply(null, result));
} else {
    console.log(0);
}