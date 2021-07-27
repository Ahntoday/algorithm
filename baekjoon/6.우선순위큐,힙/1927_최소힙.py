import heapq
import sys

n = int(input())
h = []

for _ in range(n):
    num = int(sys.stdin.readline())
    if num == 0:
        if not h:
            print(0)
        else:
            print(heapq.heappop(h))
    else:
        heapq.heappush(h, num)
