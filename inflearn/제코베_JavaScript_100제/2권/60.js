let students = ['강은지', '김유정', '박현서', '최성훈', '홍유진', '박지호', '권윤일', '김채리', '한지호', '김진이', '김민호', '강채연'];
students.sort();
// console.log(students);

let result = {};
for (let i = 1; i < students.length + 1; i++) {
    result[i] = students[i];
}

console.log(result);

// 1
for (let i = 1; i < Object.keys(result).length; i++) {
    console.log(`번호: ${i}, 이름: ${result[i]}`);
}

// 2. 답안
for (let key in students) {
    console.log(`번호: ${parseInt(key, 10) + 1}, 이름: ${students[key]}`);
}