function check(data) {
    let count = 0;
    let stack = [];
    console.log(data);

    // 괄호 개수가 같지 않으면 false
    for (let i = 0; i < data.length; i++) {
        if (data[i] === '(') {
            count++;
        }
        if (data[i] === ')') {
            count--;
        }
    }
    if (count !== 0) {
        return false;
    }

    for (let i in data) {
        if (data[i] === '(') {
            stack.push(data[i]);
        }

        if (data[i] === ')') {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }
    console.log(stack);
    return true;

}

const input = prompt('문자열을 입력하세요.').split('');

if (check(input) === true) {
    console.log("YES");
} else {
    console.log("NO");
}