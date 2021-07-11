const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
    14, 15, 16, 17, 18, 19, 20];
let sum = 0;
let numStr = "";

numStr = num.join('').split('').map(function (n) {
    return parseInt(n, 10);
});

for (let i = 0; i < numStr.length; i++) {
    sum += numStr[i];
}

console.log(sum);