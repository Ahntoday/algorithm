let arr = [10, 20, 30, 1, 2, 3, 5, 9, 11];

arr.sort((a, b) => { return a - b });
console.log(arr[arr.length - 1]);
console.log(arr[0]);

let arr2 = [10, 20, 30, 1, 2, 3, 5, 9, 11];

console.log(Math.max.apply(null, arr2));
console.log(Math.min.apply(null, arr2));

// reduce : 메모리 효율적으로 더 좋음.
let arr3 = [10, 20, 30, 1, 2, 3, 5, 9, 11];
const reducerOne = (accumulator, currentValue) => accumulator + currentValue;
const reducerTwo = (accumulator, currentValue) => accumulator - currentValue;
const reducerThree = (accumulator, currentValue) => accumulator > currentValue ? accumulator : currentValue;
const reducerFour = (accumulator, currentValue) => accumulator < currentValue ? accumulator : currentValue;
console.log(arr3.reduce(reducerOne));
console.log(arr3.reduce(reducerTwo));
console.log(arr3.reduce(reducerThree));
console.log(arr3.reduce(reducerFour));