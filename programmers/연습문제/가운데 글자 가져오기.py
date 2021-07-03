def solution(s):
    answer = ''
    if len(s) % 2 == 0:  # 짝수면
        answer = s[len(s) // 2 - 1:len(s) // 2 + 1]
    else:  # 홀수면
        answer = s[len(s) // 2]

    return answer

print(solution("abcde")) #c
print(solution("qwer")) #we