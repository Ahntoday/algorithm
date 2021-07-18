// 삽입 정렬
let data = [5, 10, 66, 77, 54, 32, 11, 15];

let result = [];
let resultLen = data.length;

function addNewData(arr, insertData) {
    for (let i in arr) {
        if (insertData < arr[i]) {
            return i;
        }
    }
    return arr.length;
}
for (let i = 0; i < resultLen; i++) {
    // 삽입값 = data.shift();
    // 인덱스 = 삽입값이들어갈인덱스(정렬된배열, 삽입값);
    // 정렬된배열.splice(인덱스, 0, 삽입값);
    let newData = data.shift();
    let index = addNewData(result, newData);
    result.splice(index, 0, newData);

    console.log(`인덱스: ${index}`);
    console.log(`정렬된배열: ${result}`);
}