function solution(clothes) {
    let answer = 1;
    // clothes 종류를 key로, 가짓수를 value로
    let cloth = {};
    clothes.map((el) => cloth[el[1]] = 0);
    clothes.map((el) => cloth[el[1]] += 1);

    Object.values(cloth).map((el) => answer *= (el + 1)); // 각각 종류 안입는 경우 포함해서 경우의 수 계산한다.
    answer -= 1; // 아무것도 안 입는 경우 빼준다
    return answer;
}

console.log(solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]])); // 5