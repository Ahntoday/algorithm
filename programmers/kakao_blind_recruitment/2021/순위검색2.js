// 정확성 통과
// 효율성 통과
// 조합과 이분탐색 문제
function combination(infos, score, map, start) {
    let key = infos.join("");
    let value = map[key];
    if (value) {
        map[key].push(score);
    }
    else {
        map[key] = [score];
    }

    // -를 이용해 조합만들기
    for (let i = start; i < infos.length; i++) {
        let combiArr = [...infos];
        combiArr[i] = '-';
        combination(combiArr, score, map, i + 1);
    }
}

function binarySearch(map, key, score) {
    let scoreArr = map[key];
    if (scoreArr) {
        let left = 0;
        let right = scoreArr.length;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (scoreArr[mid] >= score) {
                right = mid;
            }
            else if (scoreArr[mid] < score) {
                left = mid + 1;
            }
        }
        return scoreArr.length - left;
    }
    else return 0
}

function solution(info, query) {
    let answer = [];
    const map = {};

    // 1. -로 가능한 모든 조합 만들기
    for (let i = 0; i < info.length; i++) {
        let infos = info[i].split(" ");
        let score = infos.pop();

        combination(infos, score, map, 0);
    }

    // 2. 이분탐색을 위해 정렬
    for (let key in map) {
        map[key].sort((a, b) => a - b);
    }

    // 3. 이분탐색 실행
    for (let i = 0; i < query.length; i++) {
        let queries = query[i].replace(/ and /g, "").split(" ");
        let score = Number(queries.pop());

        answer.push(binarySearch(map, queries.join(""), score));
    }
    return answer;
}