// 피보나치
// 1 1 2 3 5 8 13 21 34
function f(num) {
    if (num == 1 || num == 2) {
        return parseInt(num, 10);
    }
    return f(num - 1) + f(num - 2);
}
console.log(f(6));