const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on("line", function (line) { //여러줄 입력 
    input.push(line)
    //rl.close()가 없어서 계속입력 
    //로컬에서 입력을 중지할려면 입력을 한 후 'ctrl + D'을 통해 입력 종료 
}).on("close", function () {
    // 이런식으로 적절하게 입력값을 처리해줘야한다. 
    let T = parseInt(input[0]);
    for (let i = 1; i < T + 1; i++) {
        console.log(solve(input[i]));
    }
    //프로세스 종료 
    process.exit();
});

// const T = 3;
// const input = [4, 7, 10];

function solve(n) {
    if (n == 1) {
        return 1;
    }
    if (n == 2) {
        return 2;
    }
    if (n == 3) {
        return 4;
    }
    return solve(n - 3) + solve(n - 2) + solve(n - 1)
}

// for (let i = 0; i < T; i++) {
//     console.log(solve(input[i]));
// }