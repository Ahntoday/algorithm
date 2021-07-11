function mergeSort(arr) { // 재귀를 하는 부분
    if (arr.length <= 1) { // 원소가 하나일 때는 그대로 내보낸다.
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right)); // 재귀적으로 쪼개고 합친다.
}

function merge(left, right) { // 앞에 두 수끼리 비교
    let result = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) { // 두 배열의 첫 원소를 비교하여
            result.push(left.shift()); // 더 작은 수를 결과에 넣어준다.
        } else {
            result.push(right.shift()); // 오른쪽도 마찬가지
        }
    }
    while (left.length) { // 어느 한 배열이 더 많이 남았다면 나머지를 다 넣어준다.
        result.push(left.shift());
    }
    while (right.length) { // 오른쪽도 마찬가지
        result.push(right.shift());
    }

    return result;
}

const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));

console.log(mergeSort(array));