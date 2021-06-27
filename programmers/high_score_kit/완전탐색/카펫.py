def solution(brown, yellow):
    answer = []
    numbers = list()
    numCarpet = brown + yellow
    for num in range(1, numCarpet + 1):
        if (numCarpet) % num == 0:
            numbers.append(num)

    for num in numbers:
        if numCarpet // num in numbers and numCarpet // num <= num:
            answer = [num, numCarpet // num]
            return answer

print(solution(10, 2)) #[4, 3]
print(solution(8, 1)) #[3, 3]
print(solution(24, 24)) #[8, 6]
print(solution(14, 4)) #[6, 3]