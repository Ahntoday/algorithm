const array = prompt('이름을 입력해주세요.').split(' ');
let result = {};
let winner = "";

for (let index in array) {
    let val = array[index];
    // console.log(val, result[val]);
    result[val] = result[val] === undefined ? 1 : result[val] = result[val] + 1;
}

// console.log(Object.keys(result));
winner = Object.keys(result).reduce(function (a, b) {
    // console.log(a, b, result[a], result[b]);
    return result[a] > result[b] ? a : b
});