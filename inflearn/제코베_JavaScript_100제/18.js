let scores = prompt('세 과목의 점수를 입력하세요').split(' ');

sum = 0;
for (let i = 0; i < scores.length; i++) {
    sum += parseInt(scores[i], 10);
}
console.log(Math.floor(sum / 3));