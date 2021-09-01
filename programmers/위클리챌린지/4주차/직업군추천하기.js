function solution(table, languages, preference) {
    let answer = '';
    let sumArr = []; // 접수 총합들
    let scoresPerJob = Array.from(new Array(5), () => new Array(languages.length).fill(0));
    let developerPrefer = {};
    for (let i = 0; i < languages.length; i++) {
        developerPrefer[languages[i]] = preference[i]; // 각 언어와 개발자언어선호도 연결
    }

    for (let i = 0; i < table.length; i++) {
        let jobLanguages = table[i].split(' ');
        for (let j = 0; j < languages.length; j++) {
            let idx = jobLanguages.indexOf(languages[j]);
            if (idx !== -1) {
                scoresPerJob[i][j] = 6 - idx;
            }
        }
    }

    for (let i = 0; i < scoresPerJob.length; i++) {
        let jobLanguages = table[i].split(' ');
        let sum = scoresPerJob[i].reduce((acc, cur, idx) => {
            return acc + cur * developerPrefer[languages[idx]];
        }, 0);
        sumArr.push([sum, jobLanguages[0]]);
    }

    sumArr.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0
        }
        return b[0] - a[0]
    })

    answer = sumArr[0][1];

    return answer;
}

console.log(solution(["SI JAVA JAVASCRIPT SQL PYTHON C#", "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP", "GAME C++ C# JAVASCRIPT C JAVA"], ["PYTHON", "C++", "SQL"], [7, 5, 5])); // HARDWARE