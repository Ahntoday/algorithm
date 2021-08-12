function solution(expression) {
    let answer = 0;
    const priorities = [
        ['-', '*', '+'],
        ['-', '+', '*'],
        ['*', '-', '+'],
        ['*', '+', '-'],
        ['+', '-', '*'],
        ['+', '*', '-']
    ];

    let results = [];

    for (let priority of priorities) {
        const temp = expression.split(/(\D)/);
        for (let operator of priority) {
            while (temp.includes(operator)) {
                const index = temp.indexOf(operator);
                temp.splice(index - 1, 3, eval(temp.slice(index - 1, index + 2).join('')));
            }
        }
        results.push(Math.abs(temp[0]));
    }
    answer = Math.max(...results);

    return answer;
}

console.log(solution("100-200*300-500+20"));
console.log(solution("50*6-3*2"));