function solution(n) {
    let answer = [];
    let arr = n.toString().split('');
    for (let i = arr.length - 1; i >= 0; i--) {
        answer.push(Number(arr[i]));
    }
    return answer;
}