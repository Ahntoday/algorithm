const nums = prompt('숫자를 입력하세요.').split(' ').reverse();
let result = '';

for (let i = 0; i < nums.length; i++) {
    result += nums[i];
}

console.log(result);