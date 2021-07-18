// 병합정렬 O(nlogn) 정렬 속도가 빠르다. 분할과 정복

let data = [5, 10, 66, 77, 54, 32, 11, 15];

// // 분할
// [5, 10, 66, 77, 54, 32, 11, 15]

// [5, 10, 66, 77], [54, 32, 11, 15]
// [5, 10], [66, 77], [54, 32], [11, 15]
// [5], [10], [66], [77], [54], [32], [11], [15]

// // 정복
// [5, 10], [66, 77], [32, 54], [11, 15]
// 정렬되어 있으니 0번째 항을 비교한다.
// 1회차 [10], [66, 77], [32, 54], [15]
// [5], [11]

// 2회차 [], [66, 77], [32, 54], []
// [5, 10], [11, 15]

// 3회차 [], [], [], [] 이미 정렬된 상태이므로 그대로 가져온다.
// [5, 10, 66, 77], [11, 15, 32, 54]

// 4회차 [5, 10, 66, 77], [11, 15, 32, 54]
// [5]

// 5회차 [10, 66, 77], [11, 15, 32, 54]
// [5, 10]

// 6회차 [66, 77], [15, 32, 54]
// [5, 10, 11]

// 7회차 [66, 77], [32, 54]
// [5, 10, 11, 15]

// 8회차 [66, 77], [54]
// [5, 10, 11, 15, 32]

// 9회차 [66, 77], []
// [5, 10, 11, 15, 32, 54]

// 10회차 [], [] 이미 정렬된 상태이므로 그대로 가져온다.
// [5, 10, 11, 15, 32, 54, 66, 77]

// function mergeSort(arr) {
//     let arrLen = arr.length;
//     if (arrLen <= 1) {
//         return arr;
//     }
//     let middle = parseInt(arrLen / 2)
//     let group1 = mergeSort(arr.slice(0, middle));
//     let group2 = mergeSort(arr.slice(middle));

//     return `그룹하나: ${group1} 그룹둘: ${group2}\n`;
// }

// console.log(mergeSort(data));

function mergeSort(arr) {
    let arrLen = arr.length;
    let result = [];
    if (arrLen <= 1) {
        return arr;
    }
    let middle = parseInt(arrLen / 2)
    let group1 = mergeSort(arr.slice(0, middle));
    let group2 = mergeSort(arr.slice(middle));

    while (group1.length != 0 && group2.length != 0) {
        // 원소 값이 0이면 그냥 바로 뒤에 붙여주면 되기 때문이다.
        if (group1[0] < group2[0]) {
            result.push(group1.shift());
        } else {
            result.push(group2.shift());
        }
    }

    while (group1.length != 0) {
        result.push(group1.shift());
    }

    while (group2.length != 0) {
        result.push(group2.shift());
    }
    return result;
}

console.log(mergeSort(data));