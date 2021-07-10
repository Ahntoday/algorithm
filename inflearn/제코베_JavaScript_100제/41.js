const n = prompt('숫자를 입력하세요.');

function checkPrime(num) {
    for (let i = 2; i < Math.sqrt(num) + 1; i++) {
        if (num % i === 0) {
            console.log("NO");
            return false;
        }
    }
    if (num === 1) {
        console.log("NO");
        return;
    }
    console.log("YES");
}

checkPrime(n);