function solution(n, t, m, p) {
    let answer = '';
    // 각 진법에 맞게 구해서 str에 저장 (str의 길이기 t*m 보다 작거나 같을 때까지)
    // str길이 만큼 돌면서 내 순서의 인덱스를 구해.
    // 그 다음 answer에 더해.
    let str = "";
    let i = 0;
    while (str.length <= t * m) {
        const baseStr = i.toString(n);
        str += baseStr;
        i++;
    }
    for (let i = 0; i < str.length; i++) {
        if (answer.length === t) break;
        if ((i + 1) % m === p || ((i + 1) % m === 0 && m === p)) {
            answer += str[i];
        }
    }
    return answer.toUpperCase();
}

console.log(solution(2, 4, 2, 1));
