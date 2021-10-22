let fs = require('fs');
let input = fs.readFileSync('../../test.txt').toString().split('\n');
let result = [];

for (let i in input) {
    if (input[i] === '') continue;
    let answer = [0, 0, 0, 0];
    let splited = input[i].split('');
    for (let j in splited) {
        if (splited[j] >= 'a' && splited[j] <= 'z') {
            answer[0]++;
        }
        else if (splited[j] >= 'A' && splited[j] <= 'Z') {
            answer[1]++;
        }
        else if (splited[j] >= '0' && splited[j] <= '9') {
            answer[2]++;
        }
        else if (splited[j] === ' ') {
            answer[3]++;
        }
    }
    result.push(answer.join(' '));
}

console.log(result.join('\n'));