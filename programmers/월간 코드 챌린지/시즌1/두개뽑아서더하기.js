const getCombinations = (array, selectNumber) => {
    const results = [];
    if (selectNumber === 1) {
        return array.map((element) => [element]);
    }
    array.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = getCombinations(rest, selectNumber - 1);
        const attached = combinations.map((combination) => [fixed, ...combination]);
        results.push(...attached);
    });
    return results;
}

function solution(numbers) {
    let answer = [];
    let datas = getCombinations(numbers, 2);
    for (let i = 0; i < datas.length; i++) {
        let temp = datas[i][0] + datas[i][1];
        if (!answer.includes(temp)) {
            answer.push(temp);
        }
    }
    answer.sort((a, b) => a - b);
    return answer;
}

console.log(solution([2, 1, 3, 4, 1])); //  [2,3,4,5,6,7]