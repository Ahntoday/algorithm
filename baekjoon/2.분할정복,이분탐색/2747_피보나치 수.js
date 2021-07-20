// 백준 제출을 위한 코드
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input;
rl.on("line", function (line) { //한 줄 입력
    input = line;
    input = parseInt(line);
}).on("close", function () {
    console.log(fibo(input));

    process.exit(); //프로세스 종료 
});

// const n = 10;

function fibo(n) {
    let result = 0;
    let num1 = 1;
    let num2 = 1;
    if (n <= 2) {
        return 1;
    }
    for (let i = 3; i <= n; i++) {
        result = num1 + num2;
        num1 = num2;
        num2 = result;
    }
    return result;
}
// console.log(fibo(n));
