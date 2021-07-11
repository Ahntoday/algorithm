const input = prompt('문자열을 입력하세요.');
for (let i = 0; i < input.length - 1; i++) {
    console.log(input[i], input[i + 1]);
}