function solution(answers) {
    let answer = [];
    const numbers = {
        1: [1, 2, 3, 4, 5],
        2: [2, 1, 2, 3, 2, 4, 2, 5],
        3: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    }
    let counts = {
        1: 0,
        2: 0,
        3: 0
    }

    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === numbers[1][i % 5]) {
            counts[1] += 1;
        }
        if (answers[i] === numbers[2][i % 8]) {
            counts[2] += 1;
        }
        if (answers[i] === numbers[3][i % 10]) {
            counts[3] += 1;
        }
    }
    // value 값을 돌면서, 가장 maxValue를 구한다.
    // maxValue가 value인 key들을 배열에 넣고, 오름차순 정렬한다.
    const maxNum = Math.max.apply(null, Object.values(counts));
    for (let [key, value] of Object.entries(counts)) {
        if (value === maxNum) {
            answer.push(Number(key));
        }
    }
    answer.sort((a, b) => { a - b });

    return answer;
}

console.log(solution([1, 2, 3, 4, 5])); // [1]