// 재생 길이만큼 노래멜로디 길이를 늘린 다음, 
// 처음부터 m길이만큼 자른 문자열들을 배열에 담은 다음,
// 이중에 m이 있는지 확인한다.
// 재생 시간이 가장 긴 음악 제목 반환, 먼저 입력된 음악 제목 순으로
function solution(m, musicinfos) {
    var answer = []
    var obj = {}
    for (var i = 0; i < musicinfos.length; i++) {
        var arr = musicinfos[i].split(',')
        var a = arr[0].split(':')
        var b = arr[1].split(':')
        var length = (b[0] - a[0]) * 60 + (b[1] - a[1])
        var str = ''
        // 포인트1 : 정규표현식으로 C# 이런 두개의 문자를 한개의 문자로 변환
        arr[3] = arr[3].replace(/(\D)#/g, s => s[0].toLowerCase());
        m = m.replace(/(\D)#/g, s => s[0].toLowerCase());

        for (var j = 0; j < length; j++) {
            str += arr[3][j % arr[3].length]
        }
        obj[arr[2]] = str
    }
    // 포인트2 : obj객체의 모든 프로퍼티 탐색
    for (var key in obj) {
        if (obj[key].indexOf(m) >= 0) {
            // 포인트3 : 조건이 만족하는 프로퍼티가 여러개일 경우 해결해주는 조건식
            if (answer.length === 0) {
                answer = [key, obj[key].length]
            }
            if (obj[key].length > answer[1]) {
                answer = [key, obj[key].length]
            }
        }
    }
    if (answer.length > 0) {
        return answer[0]
    }
    return '(None)'
}

// 다시 수정해볼 코드
function solution(m, musicinfos) {
    let answer = [];

    let newM = m.replace(/(\D)#/g, s => s[0].toLowerCase());
    let infos = [];
    musicinfos.forEach(info => infos.push(info.split(',')));

    for (let i = 0; i < infos.length; i++) {
        let startTime = infos[i][0].split(':').map(n => parseInt(n, 10));
        let endTime = infos[i][1].split(':').map(n => parseInt(n, 10));
        let playTimeHour = endTime[0] - startTime[0];
        let playTimeMin = endTime[1] - startTime[1];
        let totalPlayTime = playTimeHour * 60 + playTimeMin;
        let code = infos[i][3].replace(/(\D)#/g, s => s[0].toLowerCase());
        let newCode = '';
        let codeArrays = [];

        if (totalPlayTime > code.length) {
            newCode = Array(parseInt(totalPlayTime / code.length, 10) + 1).join(code);
        }
        else {
            newCode = code;
        }

        for (let i = 0; i < newM.length; i++) {
            codeArrays.push(newCode.slice(i, newM.length + i));
        }
        if (codeArrays.includes(newM)) answer.push(infos[i][2]);
        console.log(codeArrays);
    }

    if (!answer.length) return "(None)"; // answer 배열에 원소가 없다면 조건에 일치하는 음악이 없는 것.

    answer.sort((a, b) => {
        if (a[1] === b[1]) return 0;
        return b[1] - a[1];
    }) // 1번 인덱스(총 재생수)가 같다면 순서를 유지하고, 같지 않다면 내림차순 정렬한다.
    return answer[0]; // 입력 순서 + 내림차순을 반영했으므로 배열의 첫번째 원소의 제목이 정답이다.
}