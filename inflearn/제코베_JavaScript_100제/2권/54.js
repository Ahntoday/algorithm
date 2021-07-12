const input = prompt('수를 입력하시오.').split(' ').map(function (n) {
    return parseInt(n, 10);
});

function checkNum(data) {
    data.sort((a, b) => { return a - b; });
    for (let i = 0; i < data.length - 1; i++) {
        console.log(data[i], data[i + 1]);
        if (data[i + 1] !== data[i] + 1) {
            return false;
        }
    }
    return true;
}

if (checkNum(input)) {
    console.log("YES");
} else {
    console.log("NO");
}