// const num = parseInt(prompt('숫자를 입력하세요.'), 10);
// console.log(num.toLocaleString()); 

const input = prompt('숫자를 입력하세요.');
const comma = (input) => {
    if (input.length <= 3) {
        return input;
    }

    if (input.length > 4) {
        return comma(input.slice(0, input.length - 3)) + ',' + input.slice(input.length - 3);
    }
}

console.log(comma(input));