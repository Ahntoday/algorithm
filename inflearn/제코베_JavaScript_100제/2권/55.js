const route = [];
// 직접 그려보면서 코드 순서를 적어보면 이해가 빠름.
function hanoi(num, start, end, temp) {
    //원판이 한 개일 때에는 바로 옮기면 됩니다.
    if (num === 1) {
        route.push([start, end]);
        return NaN;
    }

    //원반이 n-1개를 경유기둥으로 옮기고
    hanoi(num - 1, start, temp, end);
    //가장 큰 원반은 목표기둥으로
    route.push([[start, end]]);
    //경유기둥과 시작기둥을 바꿉니다.
    hanoi(num - 1, temp, end, start);
}

hanoi(3, 'A', 'B', 'C');
console.log(route);
console.log(route.length);
