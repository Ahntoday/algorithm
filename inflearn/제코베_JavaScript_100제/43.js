let data = prompt('수를 입력하세요.');

let result = "";
while (data !== 0) {
    result += (data % 2).toString();
    data = parseInt(data / 2, 10);
}

// console.log(result);
result = result.split('').reverse().join('');
console.log(result);