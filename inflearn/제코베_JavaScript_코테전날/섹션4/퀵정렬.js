// 퀵정렬 (worst- O(nlong2n), best - O(n**2))
let data = [66, 77, 54, 32, 10, 5, 11, 15];

// [66, 77, 54, 32, 10, 5, 11, 15]
// 피봇값: 66
// [54, 32, 10, 5, 11, 15] + [66] + [77]

// 피봇값: 54
// [32, 10, 5, 11, 15] + [54] + [66] + [77]

// 피봇값: 32
// [10, 5, 11, 15] + [32] + [54] + [66] + [77]

// 피봇값: 10
// [5] + [10] + [11, 15] + [32] + [54] + [66] + [77]

// 피봇값: 11
// [5] + [10] + [11] + [15] + [32] + [54] + [66] + [77]

function quickSort(arr) {
    let arrLen = arr.length;

    if (arrLen <= 1) {
        return arr;
    }

    let pivot = [arr.shift()];
    let group1 = [];
    let group2 = [];

    for (let i in arr) {
        if (arr[i] < pivot) {
            group1.push(arr[i]);
        } else {
            group2.push(arr[i]);
        }
    }

    console.log(`그룹하나: ${group1}\n 그룹둘: ${group2}\n 피봇값: ${pivot}`);

    return quickSort(group1).concat(pivot, quickSort(group2));
}

console.log(quickSort(data));