// 1. 함수 사용
const word = prompt('문장을 입력하세요.');

function replaceAll(str, searchStr, replaceStr) {
    return str.split(searchStr).join(replaceStr);
}
console.log(replaceAll(word, "q", "e"));

// 2. 정규식 사용
const data = prompt('문장을 입력하세요.');
console.log(data.replace(/q/g, "e"));