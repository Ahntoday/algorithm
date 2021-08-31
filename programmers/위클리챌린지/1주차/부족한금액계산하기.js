function solution(price, money, count) {
    let answer = -1;
    let needMoney = 0;
    for (let i = 1; i < count + 1; i++) {
        needMoney += price * i;
    }
    if (money < needMoney) {
        answer = Math.abs(money - needMoney, 10);
    }
    else {
        answer = 0;
    }

    return answer;
}

console.log(solution(3, 20, 4));