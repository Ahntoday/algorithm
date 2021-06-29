def solution(board, moves):
    answer = 0

    stack = []

    # 1. moves(열 위치 나타냄)만큼 크레인을 작동시킨다.
    # 2. 크레인을 작동시킬 때는 해당 move의 위치에 있는 값을 스택에 넣는다.
    # 3. 스택에 바로 연이어서 같은 값이면 두 개를 stack에서 pop하고, answer 값을 올린다.
    for move in moves:
        for i in range(len(board)):
            if board[i][move - 1] != 0:
                stack.append(board[i][move - 1])
                board[i][move - 1] = 0
                if len(stack) > 1:
                    if stack[-1] == stack[-2]:
                        stack.pop()
                        stack.pop()
                        answer += 2
                break

    return answer

print(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4])) #4