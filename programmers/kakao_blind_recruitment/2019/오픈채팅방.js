function solution(record) {
    let answer = [];

    // 1. 배열 생성
    let newRecordArr = record.map(str => str.split(' '));

    // 2. uid와 nickName 매칭
    let nickNameSet = {};
    for (let i = 0; i < newRecordArr.length; i++) {
        if (newRecordArr[i].length === 3) {
            nickNameSet[newRecordArr[i][1]] = newRecordArr[i][2];
        }
    }

    // 3. 출력하기
    for (let i = 0; i < newRecordArr.length; i++) {
        if (newRecordArr[i][0] === 'Enter') {
            answer.push(nickNameSet[newRecordArr[i][1]] + '님이 들어왔습니다.');
        }
        else if (newRecordArr[i][0] === 'Leave') {
            answer.push(nickNameSet[newRecordArr[i][1]] + '님이 나갔습니다.');
        }
    }

    return answer;
}