function solution(sizes) {
    let answer = 0;
    // 두 변중 긴 것 -> 가로
    // 두 변중 짧은 것 -> 세로 돌려서 계산
    let width = 0;
    let height = 0;
    for (let i = 0; i < sizes.length; i++) {
        width = Math.max(width, Math.max(sizes[i][0], sizes[i][1]));
        height = Math.max(height, Math.min(sizes[i][0], sizes[i][1]));
    }
    answer = width * height;
    return answer;
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]));