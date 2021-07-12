const nationWidth = {
    'korea': 220877,
    'Rusia': 17098242,
    'China': 9596961,
    'France': 543965,
    'Japan': 377915,
    'England': 242900,
}

const w = nationWidth['korea'];

delete nationWidth['korea'];

const entry = Object.entries(nationWidth);
const values = Object.values(nationWidth);

// gap에 최댓값 저장
let gap = Math.max.apply(null, values);
let item = [];

// 차이가 가장 없는 것을 찾는다.
for (let i in entry) {
    if (gap > Math.abs(entry[i][1] - w)) {
        gap = Math.abs(entry[i][1] - w);
        item = entry[i];
    }
}
console.log(item);
console.log(item[0], item[1] - w);