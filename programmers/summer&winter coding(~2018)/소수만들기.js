const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return
    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
        const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
        const attached = combinations.map((combination) => [fixed, ...combination]);     // 돌아온 조합에 떼 놓은(fixed) 값 붙이기
        results.push(...attached); // 배열 spread syntax 로 모두다 push
    });

    return results; // 결과 담긴 results return
}

function isPrime(num) {
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

function solution(nums) {
    let answer = 0;

    // 3개씩 조합을 구해, 소수인지 판별하는 함수에 넣어
    const combis = getCombinations(nums, 3);
    for (let i = 0; i < combis.length; i++) {
        let temp = 0;
        for (let j = 0; j < combis[i].length; j++) {
            temp += combis[i][j];
        }
        if (isPrime(temp)) {
            answer += 1;
        }
    }

    return answer;
}

console.log(solution([1, 2, 3, 4]));