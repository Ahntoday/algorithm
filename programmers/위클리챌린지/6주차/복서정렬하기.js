function solution(weights, head2head) {
    let result = [];

    for (let i = 0; i < weights.length; i++) {
        let win = 0;
        let lose = 0;
        let over = 0;
        // weights[i] => 선수의 몸무게
        // head2head[i] => 선수의 전적 (length가 같기 때문)
        // head2head[i][j] => 각 경기의 승패
        for (let j = 0; j < head2head[i].length; j++) {
            // N은 아무것도 하지 않음
            if (head2head[i][j] === "N") continue;
            if (head2head[i][j] === "L") lose++;
            if (head2head[i][j] === "W") {
                // weights[i] => 선수의 몸무게
                // weigths[j] => 대결 상대의 몸무게
                // 대결한 상대의 몸무게가 더 크면
                if (weights[i] < weights[j]) {
                    over++;
                }
                win++;
            }
        }
        // 승률
        let rate = win / (win + lose);
        // 각 선수의 정보를 한 배열 안에 담음
        result = [...result, [rate, over, weights[i], i + 1]];
    }

    // 배열을 정렬
    result.sort((a, b) => {
        // 승률 내림차순 정렬
        if (a[0] > b[0]) return -1;
        if (a[0] < b[0]) return 1;
        // 승률이 같으면?
        // 나보다 무거운 상대 이긴 횟수 내림차순 정렬
        if (a[1] > b[1]) return -1;
        if (a[1] < b[1]) return 1;
        // 나보다 무거운 상대 이긴 횟수가 같으면?
        // 몸무게 내림차순 정렬
        if (a[2] > b[2]) return -1;
        if (a[2] < b[2]) return 1;
        // 몸무게마저 같으면?
        // 선수 번호 오름차순 정렬
        if (a[3] > b[3]) return 1;
        if (a[3] < b[3]) return -1;
        return 0;
    })

    // 정렬된 배열에서 선수 번호만 매핑
    return result.map(el => el[3]);
}

console.log(solution([50, 82, 75, 120], ["NLWL", "WNLL", "LWNW", "WWLN"])); // [3,4,1,2]