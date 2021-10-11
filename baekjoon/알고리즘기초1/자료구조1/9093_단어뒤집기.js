const fs = require('fs');
const input = fs.readFileSync("../../test.txt").toString().trim().split('\n');
const T = parseInt(input.shift(), 10);

let datas = Array.from(new Array(T), () => []);
let results = [];
for (let i = 0; i < T; i++) {
    datas[i] = input[i].split(' ');
}

for (let i = 0; i < T; i++) {
    let temp = [];
    const dataLength = datas[i].length;
    let tempArray = datas[i].toString().split(',');
    for (let j = 0; j < dataLength; j++) {
        let tempword = tempArray.shift().split('');
        let reversedWord = '';
        for (let k = tempword.length - 1; k >= 0; k--) {
            reversedWord += tempword[k];
        }
        temp.push(reversedWord);
    }
    results.push(temp.join(' '));
}

console.log(results.join('\n'));