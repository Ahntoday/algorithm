// 선택정렬
let arr = [10, 11, 9, 2, 3, 6, 5, 4];
let result = [];

// 특정 원소가 다 사라질 때까지 -> while문을 쓴다.
while (arr != 0) {
    console.log(Math.min.apply(null, arr), arr);
    result.push(Math.min.apply(null, arr));
    // pop, push, shift, unshift
    arr.splice(arr.indexOf(Math.min.apply(null, arr)), 1);
}

// for문
// for (let i = 0; i < 8; i++) {
//     result.push(Math.min.apply(null, arr));
//     // pop, push, shift, unshift
//     arr.splice(arr.indexOf(Math.min.apply(null, arr)), 1);
// }
console.log(result);