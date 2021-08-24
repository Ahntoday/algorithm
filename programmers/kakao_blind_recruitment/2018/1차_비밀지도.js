function fillZero(width, str) {
    return str.length >= width ? str : new Array(width - str.length + 1).join('0') + str;//남는 길이만큼 0으로 채움
}

function solution(n, arr1, arr2) {
    let answer = new Array(n);
    let map1 = new Array(n);
    let map2 = new Array(n);
    for (let i = 0; i < n; i++) {
        let datas = arr1[i].toString(2);
        let datas2 = arr2[i].toString(2);
        datas = fillZero(n, datas);
        datas2 = fillZero(n, datas2);
        map1[i] = datas;
        map2[i] = datas2;
    }

    for (let i = 0; i < n; i++) {
        let str = '';
        for (let j = 0; j < n; j++) {
            if (map1[i][j] === '0' && map2[i][j] === '0') {
                str += ' ';
            }
            else {
                str += '#';
            }
        }
        answer[i] = str;
    }
    return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
