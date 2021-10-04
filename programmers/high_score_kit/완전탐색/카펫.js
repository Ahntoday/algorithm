const permutation = (arr, selectNum) => {
    const result = [];
    if (selectNum === 1) return arr.map((v) => [v]);

    arr.forEach((v, idx, arr) => {
        const fixed = v;
        const restArr = arr;
        const permutationArr = permutation(restArr, selectNum - 1);
        const combineFix = permutationArr.map((v) => [fixed, ...v]);
        result.push(...combineFix);
    });
    return result;
}

function solution(brown, yellow) {
    let answer = [];
    const sum = brown + yellow;
    let yaksu = [];
    for (let i = 1; i < sum + 1; i++) {
        if (sum % i === 0) {
            yaksu.push(i);
        }
    }
    const permuList = permutation(yaksu, 2);
    for (let i = 0; i < permuList.length; i++) {
        const [w, h] = [permuList[i][0], permuList[i][1]];
        if (w >= h && w * h === sum && (w - 2) * (h - 2) === yellow) {
            answer = [w, h];
        }
    }
    return answer;
}

console.log(solution(10, 2)); // [4, 3]