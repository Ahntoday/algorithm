function solution(msg) {
    let answer = [];
    let words = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let charset = msg.split('');
    let word = '';
    // 현재 입력이 들어와. 다음 글자를 더해.
    // 그 값이 없다면 -> 사전에 추가해. 현재 입력을 출력해.
    // 그 값이 있다면 또 다음 글자를 더해.
    for (let i = 0; i < charset.length; i++) {
        word += charset[i];
        if (i == charset.length - 1) { // 마지막이라면
            answer.push(words.indexOf(word) + 1);
            break;
        }
        word += charset[i + 1];
        if (!words.includes(word)) { // 사전에 없다면
            // console.log(word);
            words.push(word);
            word = word.substr(0, word.length - 1);
            answer.push(words.indexOf(word) + 1);
            word = '';
        }
        else { // 사전에 있다면
            word = word.substr(0, word.length - 1);
        }
    }
    // console.log(answer);
    return answer;
}

console.log(solution("KAKAO"));
console.log(solution("TOBEORNOTTOBEORTOBEORNOT"));
console.log(solution("ABABABABABABABAB"));