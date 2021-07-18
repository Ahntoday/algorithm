let result = 0;
let x = '123123';
while (true) {
    if (x.length == 1) {
        result += parseInt(x, 10);
        break;
    }
    let y = x.split('');
    result += parseInt(y.pop(), 10);
    x = y.join('');
}

console.log(result);


function f(num) {
    if (num.length == 1) {
        return parseInt(num, 10);
    }
    return parseInt(num[num.length - 1], 10) + f(num.slice(0, num.length - 1));
}

console.log(f('123123'));