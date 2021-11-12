function solution(s) {
    let answer = '';
    let words = s.split(' ');
    answer = words.map(el => {
        let str = '';
        for (let i = 0; i < el.length; i++) {
            if (i % 2 === 0) {
                str += el[i].toUpperCase();
            }
            else {
                str += el[i].toLowerCase();
            }
        }
        return str;
    }).join(" ");

    return answer;
}

console.log(solution("try hello world"));