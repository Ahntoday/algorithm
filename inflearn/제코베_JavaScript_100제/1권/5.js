var a = 10;
var b = 2;

for (var i = 1; i < 5; i += 2) {
    a += i; // (i=1, a=11), (i=3, a=14)
}

console.log(a + b); // 16