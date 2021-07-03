def solution(left, right):
    answer = 0
    nums = dict()
    for i in range(left, right + 1):
        count = 0
        for j in range(1, i + 1):
            if i % j == 0:
                count += 1
        nums[i] = count

    for i in range(left, right + 1):
        if nums[i] % 2 == 0:
            answer += i
        else:
            answer -= i

    return answer

print(solution(13, 17)) #43
print(solution(24, 27)) #52