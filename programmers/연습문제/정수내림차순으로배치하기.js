function solution(n) {
    let answer = 0;
    let arr = n.toString().split('');
    arr.sort((a, b) => {
        return b - a;
    });

    answer = Number(arr.join(''));

    return answer;
}