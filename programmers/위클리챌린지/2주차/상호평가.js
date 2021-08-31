function checkMyScore(myScore, scoresForMe) {
    let maxScore = Math.max.apply(null, scoresForMe);
    let minScore = Math.min.apply(null, scoresForMe);
    const scoreCount = {};
    scoresForMe.forEach((x) => {
        scoreCount[x] = (scoreCount[x] || 0) + 1;
    });

    if ((myScore === maxScore) || (myScore === minScore)) {
        if (scoreCount[myScore] === 1) { // 동일한 게 없으면
            return true;
        }
        return false;
    }
}

function solution(scores) {
    let answer = '';
    let averages = [];
    let scoresPerStudent = Array.from(new Array(scores.length), () => new Array(scores.length).fill(0));
    for (let i = 0; i < scores.length; i++) {
        for (let j = 0; j < scores.length; j++) {
            scoresPerStudent[j][i] = scores[i][j];
        }
    }

    for (let i = 0; i < scoresPerStudent.length; i++) {
        for (let j = 0; j < scoresPerStudent.length; j++) {
            let myScore = scoresPerStudent[i][i];
            if (checkMyScore(myScore, scoresPerStudent[i])) { // 유일한 최솟값,최댓값이면
                scoresPerStudent[i].splice(i, 1);
                break;
            }
        }
        let sum = scoresPerStudent[i].reduce((acc, cur) => {
            return acc + cur
        }, 0);
        averages.push(Number(sum / scoresPerStudent[i].length, 10));
    }

    averages.forEach(average => {
        let temp = parseInt(average / 10, 10);
        switch (temp) {
            case 10:
            case 9:
                answer += 'A';
                break;
            case 8:
                answer += 'B';
                break;
            case 7:
                answer += 'C';
                break;
            case 6:
            case 5:
                answer += 'D';
                break;
            default:
                answer += 'F';
        }
    })

    return answer;
}

console.log(solution([[100, 90, 98, 88, 65], [50, 45, 99, 85, 77], [47, 88, 95, 80, 67], [61, 57, 100, 80, 65], [24, 90, 94, 75, 65]])); //FBABD