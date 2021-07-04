const n = prompt('크리스마스 트리를 몇 줄 원하시나요?');
let tree = '';

for (let i = 0; i < n; i++) {
    let star = '';
    for (let j = n - 1; j > i; j--) {
        star += ' ';
    }
    for (let k = 0; k <= i; k++) {
        star += '*';
    }
    for (let k = 1; k <= i; k++) {
        star += '*';
    }
    tree += star + '\n';
}
console.log(tree);