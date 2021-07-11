const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let sumDay = 2; // 1월 1일은 수요일 
let answer = '';
const data = prompt('두 수를 입력하세요').split(' ').map(function (n) {
    return parseInt(n, 10);
});

for (let i = 0; i < data[0] - 1; i++) {
    sumDay += month[i];
}
sumDay += data[1];
answer = day[sumDay % 7];

console.log(answer);