function solution(s) {
    let answer = 0;
    const englishes = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    // 다음 문자 하나하나 더해가.
    // 합쳐서 만든 단어가 english에 있으면 바꿔서 넣어.
    // 숫자가 나오면 숫자 바로 넣어.
    // 특정 단어가 문자열에 있어 -> 인덱스를 가져와. 그 값에 해당하는 인덱스의 number의 값을 배열에 담아.
    // 배열에 담은 후에 join 시켜서 문자열로 만들어.
    let word = '';
    let arr = s.split('');
    let answerArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (numbers.includes(arr[i])) {
            answerArr.push(arr[i]);
        }
        else {
            word += arr[i];
            if (englishes.includes(word)) {
                let index = englishes.indexOf(word);
                answerArr.push(numbers[index]);
                word = '';
            }
        }
    }
    answer = parseInt(answerArr.join(''), 10);

    return answer;
}

console.log(solution("one4seveneight"));