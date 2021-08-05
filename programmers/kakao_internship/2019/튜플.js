function solution(s) {
    let answer = [];
    let data = s.substring(2, s.length - 2).split('},{').map(str => str.split(','))
    data = data.map(v => v.map(el => Number(el)));

    data.sort((a, b) => a.length - b.length);
    console.log(data);

    answer = data.reduce((acc, nums) => {
        // acc가 포함하지 않는 숫자를 value에 담는다.
        // acc에 값을 추가한다.
        let value = nums.filter(num => !acc.includes(num))[0];
        acc.push(value);

        return acc;
    });

    return answer;
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}")); // [2, 1, 3, 4]