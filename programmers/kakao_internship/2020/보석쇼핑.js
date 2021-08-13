function solution(gems) {
    let answer = [];

    let gemsLen = new Set(gems).size;
    let gemsMap = new Map();
    let hubos = [];
    gems.forEach((gem, i) => {
        gemsMap.delete(gem); // 집어넣으려는 보석이 Map에 존재한다면 삭제. 
        gemsMap.set(gem, i); // 새 보석을 넣어준다

        if (gemsMap.size === gemsLen) {
            hubos.push([gemsMap.values().next().value + 1, i + 1]);
        }
    });

    hubos.sort((a, b) => { // 짧은 구간 순으로 정렬(오름차순)
        if ((a[1] - a[0]) === (b[1] - b[0])) {
            return a[1] - b[1];
        }
        return (a[1] - a[0]) - (b[1] - b[0]);
    });

    answer = hubos[0];
    return answer;
}

console.log(solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]));