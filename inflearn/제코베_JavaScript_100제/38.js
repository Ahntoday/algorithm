// set으로 중복 없애고, 순위 3개 점수를 구해서 배열을 만든다.
// 중복 없는 배열과 동일한 점수가 있으면 count를 1 증가시킨다.
const data = prompt('점수를 입력하세요.').split(' ').map(function (n) {
    return parseInt(n, 10);
});
const scores = new Set(data);
let arrScores = Array.from(scores);
arrScores.sort((a, b) => {
    return b - a;
});

let ranking = [];
let count = 0;

ranking = arrScores.slice(0, 3);

for (let index in data) {
    if (ranking.includes(data[index])) {
        // console.log(data[index]);
        count += 1;
    }
}
// 입력: 97 86 75 66 55 97 85 97 97 95
console.log(count); // 출력: 6
