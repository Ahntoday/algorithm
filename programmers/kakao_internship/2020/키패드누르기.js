function getDistance(pos, index) {
    return Math.ceil(Math.sqrt(Math.pow(pos[0] - index[0], 2) + Math.pow(pos[1] - index[1], 2)));
}

function solution(numbers, hand) {
    let answer = '';

    let left = [1, 4, 7];
    let right = [3, 6, 9];
    let center = [2, 5, 8, 0];

    let LPos = [3, 0]; // *
    let RPos = [3, 2]; // #


    for (let i = 0; i < numbers.length; i++) {
        if (left.includes(numbers[i])) {
            answer += 'L';
            LPos = [left.indexOf(numbers[i]), 0];
        }
        else if (right.includes(numbers[i])) {
            answer += 'R';
            RPos = [right.indexOf(numbers[i]), 2];
        }
        else { // 두 손가락 하나 선택
            const index = [center.indexOf(numbers[i]), 1];
            const LDist = getDistance(LPos, index);
            const RDist = getDistance(RPos, index);

            if (LDist > RDist) { // 오른손가락이 더 가까움
                answer += 'R';
                RPos = index;
            }
            else if (RDist > LDist) { // 왼손가락이 더 가까움
                answer += 'L';
                LPos = index;
            }
            else { // 거리가 똑같음
                if (hand === 'left') {
                    answer += 'L';
                    LPos = index;
                }
                else {
                    answer += 'R';
                    RPos = index;
                }
            }
        }
    }
    return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));