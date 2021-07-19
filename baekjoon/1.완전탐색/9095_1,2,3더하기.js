const T = 3;
const input = [4, 7, 10];
const data = [1, 2, 3];

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

for (let i = 0; i < T; i++) {
    console.log(solve(input[i]));
}