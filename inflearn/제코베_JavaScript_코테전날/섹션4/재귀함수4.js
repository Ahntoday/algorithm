// 재귀함수 4 - 문자열 뒤집기

// 1. 반복문
let result = '';
let name = 'ahnseojin';
while (true) {
    if (name.length == 1) {
        result += name;
        break;
    }
    let arr = name.split('');
    result += String(arr.pop());
    name = arr.join('');
}

console.log(result);

// 2. 재귀함수
let result2 = '';

function f(name) {
    if (name.length == 1) {
        return name;
    }
    return name[name.length - 1] + f(name.slice(0, name.length - 1));
}

console.log(f('ahnseojin'));