function solution(arr) {
    let answer = [];
    let minIdx = arr.indexOf(Math.min.apply(null, arr));
    if (arr.length === 1 && arr[0] === 10) {
        return [-1]
    }
    answer = arr.slice(0, minIdx).concat(arr.slice(minIdx + 1));

    return answer;
}