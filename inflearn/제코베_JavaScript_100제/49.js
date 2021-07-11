let data = prompt('숫자들을 입력하세요.').split(' ').map(function (n) {
    return parseInt(n, 10);
});

let max = data[0];
for (let i in data) {
    if (data[i] > max) {
        max = data[i];
    }
}
console.log(max);
// data.sort((a, b) => { return b - a; });
// console.log(data[0]);
