// 정확성 통과
// 효율성 실패
function solution(info, query) {
    let answer = [];
    let user = [];
    let tempAnswer = {}; // query내용을 key로 개수를 count로.
    let queries = []; // 질문들
    user = info.map(i => i.split(' '));
    queries = query.map(q => q.replace(/ and /g, " ").split(' '));

    for (let i = 0; i < queries.length; i++) {
        let match = 0;
        for (let j = 0; j < user.length; j++) {
            let targetUser = user[j];
            if (
                (queries[i][0] == "-" || targetUser[0][0] == queries[i][0][0]) &&
                (queries[i][1] == "-" || targetUser[1][0] == queries[i][1][0]) &&
                (queries[i][2] == "-" || targetUser[2][0] == queries[i][2][0]) &&
                (queries[i][3] == "-" || targetUser[3][0] == queries[i][3][0]) &&
                (queries[i][4] == "-" || Number(targetUser[4]) >= Number(queries[i][4]))
            ) {
                match++;
            }
        }
        answer.push(match);
    }

    return answer;
}