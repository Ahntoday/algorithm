def solution(numbers):
    answer = ''

    # int형의 list를 map을 사용하여 string으로 치환한 뒤, list로 변환한다.
    numbers = list(map(str, numbers))

    numbers.sort(key=lambda x: x * 3, reverse=True)

    return str(int(''.join(numbers)))

print(solution([6, 10, 2]))
print(solution([3, 30, 34, 5, 9]))