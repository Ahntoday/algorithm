from itertools import permutations
import math


def isPrime(num):
    count = 0
    if num <= 1:
        return False
    for i in range(2, int(math.sqrt(num)) + 1):
        if num % i == 0:
            count += 1
    if count >= 1:
        return False
    return True


def solution(numbers):
    # 문자열을 문자하나하나 나눈 다음, 가능한 조합을 구한다.
    # 구한 조합들 중 소수의 개수를 센다.
    answer = 0
    datas = list()
    for i in range(1, len(numbers) + 1):
        datas += list(map(''.join, permutations(list(numbers), i)))
    datas = set(datas)

    for data in datas:
        if data[0] == '0':
            continue
        if isPrime(int(data)):
            answer += 1

    return answer

print(solution("17"))
print(solution("011"))