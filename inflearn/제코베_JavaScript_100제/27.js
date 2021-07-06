const names = prompt('이름을 입력하세요.').split(' ');
const scores = prompt('점수를 입력하세요.').split(' ');

let pair = new Set();
for (let i = 0; i < names.length; i++) {
    pair[names[i]] = parseInt(scores[i], 10);
}
console.log(pair);