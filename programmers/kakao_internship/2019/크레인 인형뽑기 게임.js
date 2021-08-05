function solution(board, moves) {
    let answer = 0;

    let stack = [];
    // board의 해당 moves 열의 값을 stack에 넣는다.
    // board의 해당 moves 열의 값을 0으로 바꾼다.
    for (let i = 0; i < moves.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[j][moves[i] - 1] !== 0) {
                stack.push(board[j][moves[i] - 1])
                board[j][moves[i] - 1] = 0

                if (stack.length > 1) {
                    if (stack[stack.length - 1] === stack[stack.length - 2]) {
                        stack.pop();
                        stack.pop();
                        answer += 2;
                    }
                }
                break;
            }
        }
    }
    return answer;
}