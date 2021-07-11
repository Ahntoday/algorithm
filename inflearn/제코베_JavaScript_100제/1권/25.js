function circle(n) {
    const result = n * n * 3.14;

    return result;
}

const r = prompt('반지름의 길이를 입력하세요.');
console.log(circle(r));