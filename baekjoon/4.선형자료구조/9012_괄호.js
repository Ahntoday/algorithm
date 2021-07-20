// 백준 입출력을 위한 코드
// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let input = [];
// rl.on("line", function (line) { //여러줄 입력 
//     input.push(line)
//     //rl.close()가 없어서 계속입력 
//     //로컬에서 입력을 중지할려면 입력을 한 후 'ctrl + D'을 통해 입력 종료 
// }).on("close", function () {
//     // 이런식으로 적절하게 입력값을 처리해줘야한다. 
//     let T = parseInt(input.shift());
//     for (let i = 0; i < T; i++) {
//         console.log(isValidPS(input[i]));
//     }
//     //프로세스 종료 
//     process.exit();
// });

let input = [
    '6',
    '(())())',
    '(((()())()',
    '(()())((()))',
    '((()()(()))(((())))()',
    '()()()()(()()())()',
    '(()((())()('
];

// let input = [
//     '3',
//     '((',
//     '))',
//     '())(()'
// ]

function isValidPS(sentence) {
    let data = sentence.split('');
    let stack = [];
    // console.log(data);
    if (data.length % 2 !== 0) {
        return 'NO';
    }
    for (let i = 0; i < data.length; i++) {
        if (data[i] == '(') {
            stack.push('(');
        }
        else if (data[i] == ')') {
            if (stack.length != 0) {
                stack.pop();
            } else {
                return 'NO';
            }
        }
    }
    if (stack.length !== 0) {
        return 'NO';
    }
    return 'YES';
}

const T = parseInt(input.shift(), 10);
for (let i = 0; i < T; i++) {
    console.log(isValidPS(input[i]));
}
