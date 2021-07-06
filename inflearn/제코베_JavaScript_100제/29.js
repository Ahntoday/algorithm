function isUpper(num) {
    return num.charAt(0) === num.charAt(0).toUpperCase();
}

const alphabet = prompt('알파벳을 입력하세요.');

if (isUpper(alphabet)) {
    console.log("YES");
} else {
    console.log("NO");
}