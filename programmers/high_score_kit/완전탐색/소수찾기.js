const permutation = (arr, selectNum) => {
    let result = [];
    if (selectNum === 1) return arr.map((v) => [v]);

    arr.forEach((v, idx, arr) => {
        const fixer = v;
        const restArr = arr.filter((_, index) => index !== idx);
        const permuationArr = permutation(restArr, selectNum - 1);
        const combineFixer = permuationArr.map((v) => [fixer, ...v]);
        result.push(...combineFixer);
    });
    return result;
}

const isPrime = (num) => {
    if (num === 0 || num === 1) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) {
            // 한 번이라도 나누어 졌으니 소수가 아니므로 return false
            return false;
        }
    }
    // 나눠진 수가 없다면 해당 수는 소수이므로 return true
    return true;
}

function solution(numbers) {
    let answer = 0;
    let permuList = [];
    let numberList = [];
    for (let i = 1; i <= numbers.length; i++) {
        permuList.push(...permutation(numbers.split(''), i));
    }
    for (let i = 0; i < permuList.length; i++) {
        numberList.push(Number(permuList[i].join('')));
    }
    numberList = Array.from(new Set(numberList));
    for (let i = 0; i < numberList.length; i++) {
        if (isPrime(numberList[i])) {
            answer += 1;
        }
    }
    return answer;
}

console.log(solution("17")); // 3