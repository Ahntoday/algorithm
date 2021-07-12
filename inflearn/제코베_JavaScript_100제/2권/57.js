let s = '';
let count = 0;

for (let i = 0; i <= 1000; i++) {
    s += i;
}

for (let j in s) {
    if (s[j] == 1) {
        count++;
    }
}
console.log(count);