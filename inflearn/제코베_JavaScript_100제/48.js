let data = prompt('문자열을 입력하세요.');
let result = [];
let resultStr = '';
for (let i = 0; i < data.length; i++) {
    if (data[i] === data[i].toLowerCase()) {
        result.push(data[i].toUpperCase());
    } else {
        result.push(data[i].toLowerCase());
    }
}

resultStr = result.join('');
console.log(resultStr);