from collections import deque


def solution(priorities, location):
    answer = 0
    queue = deque()
    for i in range(len(priorities)):
        queue.append((priorities[i], i))

    while len(queue) > 0:
        data = queue.popleft()

        if len(queue) != 0:
            maxData = max(queue)
            if data[0] < maxData[0]:
                queue.append(data)
            else:
                answer += 1
                if data[1] == location:
                    break
        else:
            answer += 1
            if data[1] == location:
                break

    return answer

print(solution([2, 1, 3, 2], 2)) #1
print(solution([1, 1, 9, 1, 1, 1], 0)) #5