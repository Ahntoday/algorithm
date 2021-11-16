function solution(n) {
    let answer = 0;

    let array = n.toString().split('').map(el => parseInt(el, 10));
    array.map((el) => answer += el);

    return answer;
}