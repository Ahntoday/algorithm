function solution(lottos, win_nums) {
    let answer = [];
    let winner = [6, 5, 4, 3, 2, 1, 0];
    // win_nums를 돌면서 lottos에 있으면 count를 1증가시킨다.
    // 0 개수만큼 count를 1증가시킨다.
    // count가 winner랑 같으면 인덱스를 answer에 담는다.
    let count = 0;
    let count_0 = 0;
    let [high, low] = [0, 0];
    for (let i = 0; i < lottos.length; i++) {
        if (lottos[i] === 0) {
            count_0 += 1;
        }
    }

    for (let win_num of win_nums) {
        if (lottos.includes(win_num)) {
            count += 1;
        }
    }

    low = count;
    high = count + count_0;

    for (let i = 0; i < winner.length; i++) {
        if (low === winner[i]) {
            if (low <= 1) {
                answer.push(6);
            }
            else {
                answer.push(i + 1);
            }
        }
        if (high === winner[i]) {
            if (high <= 1) {
                answer.push(6);
            }
            else {
                answer.push(i + 1);
            }
        }
    }
    return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); // [3, 5]