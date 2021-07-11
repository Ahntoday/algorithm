const data = prompt('수를 입력하세요.').split('').map(function (n) {
    return parseInt(n, 10);
});
let sum = 0;
for (let index in data) {
    sum += data[index];
}
console.log(sum);