function solution(N, stages) {
    let answer = [];
    // 전체 스테이지 개수 N, 현재 멈춰있는 스테이지 번호 stages 
    // answer : 실패율이 높은 스테이지부터 내림차순으로 스테이지 번호

    // stages를 돌면서 스테이지 : 1/8 이런 식으로 스테이지 번호와 카운트를 딕셔너리로 넣는다.
    // rates = {}에 스테이지번호와 실패율을 적는다. 실패율 분모는 전체에서 전 인덱스 딕셔너리 값을 뺀 값이다.
    let rates = {};
    let counts = {};
    let tempKeys = [];
    let bunmo = stages.length;
    let ratesArr = [];

    for (let i = 0; i < stages.length; i++) {
        if (!counts.hasOwnProperty(stages[i])) {
            counts[stages[i]] = 1;
        }
        else {
            counts[stages[i]] += 1;
        }
    }

    for (let i = 1; i < N + 1; i++) {
        tempKeys.push(i);
    }

    for (let i = 1; i < tempKeys.length + 1; i++) {
        if (!Object.keys(counts).includes(String(i))) { // 키들에 값이 없으면
            counts[i] = 0;
        }
    }

    Object.keys(counts).forEach(key => {
        rates[key] = counts[key] / bunmo;
        bunmo -= counts[key];
    })

    for (let rate in rates) {
        ratesArr.push([rate, rates[rate]]);
    }
    ratesArr.sort((a, b) => {
        return b[1] - a[1];
    })

    for (let i = 0; i < ratesArr.length; i++) {
        answer.push(Number(ratesArr[i][0]));
    }

    if (answer.length !== N) {
        let index = answer.indexOf(N + 1);
        answer.splice(index, 1);
    }

    return answer;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3,4,2,1,5]