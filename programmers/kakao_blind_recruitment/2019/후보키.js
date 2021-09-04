// 다른 사람의 풀이 참고
function solution(relation) {
    const cols = relation[0].length;
    const rows = relation.length;
    const sets = 1 << cols;
    const sk = new Set();

    for (let i = 1; i < sets; i++) {
        const tmp = new Set();
        for (let row = 0; row < rows; row++) {
            let key = '';
            for (let col = 0; col < cols; col++) {
                if (i & (1 << col)) key = String(key) + String(relation[row][col])
            }
            tmp.add(key);
        }
        if (tmp.size === rows) sk.add(i); // 중복되는 내용이 없었다면 추가
    }
    for (let i of sk) {
        for (let j of sk) {
            if (i >= j) continue
            if ((i & j) === i) sk.delete(j); // 최소성을 만족하지 못하면 삭제
        }
    }

    console.log(Array.from(sk).map(e => e.toString(2)));

    return sk.size
}

console.log(solution([["100", "ryan", "music", "2"], ["200", "apeach", "math", "2"], ["300", "tube", "computer", "3"], ["400", "con", "computer", "4"], ["500", "muzi", "music", "3"], ["600", "apeach", "music", "2"]]));