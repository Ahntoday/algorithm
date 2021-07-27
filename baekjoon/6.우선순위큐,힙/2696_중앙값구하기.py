# -*- coding: utf8 -*-
from sys import stdin
import heapq
# small은 최대힙 big은 최소힙으로 구성
# small에서 하나 뺀 거와 big에서 하나 뺀 거, 입력값1개 총 3개 중 중앙값을 구함.


def solution(data):
    smallh = []
    bigh = []
    middle = data[0]
    result = [middle]
    for idx, val in enumerate(data[1:], 1):
        if val > middle:
            heapq.heappush(bigh, val)
        else:
            heapq.heappush(smallh, (-val, val))

        if idx % 2 == 0:
            if len(smallh) < len(bigh):
                heapq.heappush(smallh, (-middle, middle))
                middle = heapq.heappop(bigh)
            elif len(smallh) > len(bigh):
                heapq.heappush(bigh, middle)
                middle = heapq.heappop(smallh)[1]
            result.append(middle)
    print(len(result))

    for i in range(len(result)):
        if i != 0 and (i+1) % 10 == 1:
            print()
        print(result[i], end=' ')
    print()


t = int(stdin.readline().rstrip())  # 테스트 케이스 개수
for i in range(t):
    m = int(stdin.readline().rstrip())  # 수열의 크기
    data = []
    if m % 10 == 0:
        for _ in range(m//10):
            data.extend(list(map(int, stdin.readline().rstrip().split(' '))))
    else:
        for _ in range(m//10+1):
            data.extend(list(map(int, stdin.readline().rstrip().split(' '))))

    solution(data)
