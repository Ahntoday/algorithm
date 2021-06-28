import math


def solution(progresses, speeds):
    answer = []
    number = 1
    time = math.ceil((100 - progresses[0]) / speeds[0])
    for i in range(1, len(progresses)):
        if time >= math.ceil((100 - progresses[i]) / speeds[i]):
            number += 1
        else:
            answer.append(number)
            number = 1
            time = math.ceil((100 - progresses[i]) / speeds[i])
    answer.append(number)

    return answer

print(solution([93, 30, 55], [1, 30, 5])) #[2, 1]
print(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])) #[1, 3, 2]