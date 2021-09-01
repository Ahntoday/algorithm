function solution(new_id) {
    let answer = '';
    new_id = new_id.toLowerCase(); // 1단계
    new_id = new_id.replace(/[^\w-._]+/g, ''); // 2단계
    new_id = new_id.replace(/\.+/g, '.'); // 3단계
    if (new_id[0] === '.') { // 4단계
        new_id = new_id.slice(1, new_id.length);
    }
    if (new_id === '') { // 5단계
        new_id = 'a';
    }
    if (new_id.length >= 16) { // 6단계
        new_id = new_id.slice(0, 15);
    }
    if (new_id[new_id.length - 1] === '.') {
        new_id = new_id.slice(0, new_id.length - 1);
    }
    if (new_id.length <= 2) { // 7단계
        let temp = new_id[new_id.length - 1].repeat(3 - new_id.length);
        new_id += temp;
    }
    answer = new_id;
    return answer;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm")); // bat.y.abcdefghi