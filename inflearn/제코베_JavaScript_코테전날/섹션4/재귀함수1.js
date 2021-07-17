// 반복문/재귀함수를 이용한 1부터 100까지 합과 곱
// 재귀함수 : 내가 나를 호출하는 함수
// 반복문 <-> 재귀함수

// 1. 반복문 합 O(n)
let s = 0;
for (let i = 0; i < 101; i++) {
    s += i;
}
console.log(s);

// 2. 공식 O(1) 반복없이 바로 실행 -> 효율을 위해 내가 풀려는 것에 공식이 있는지 확인
let n = 100;
console.log(n * (n + 1) / 2);

// 3. 반복문 곱 O(n)
let m = 1;
for (let i = 1; i < 6; i++) {
    m *= i;
}
console.log(m);

// 4. 재귀함수 (100부터 시작 ..)
function f(n) {
    if (n <= 1) {
        return 1;
    }
    return n + f(n - 1)
}
console.log(`재귀함수: ${f(100)}`)