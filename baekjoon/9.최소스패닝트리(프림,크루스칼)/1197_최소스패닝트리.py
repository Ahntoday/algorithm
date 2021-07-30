# -*- coding: utf8 -*-
import heapq
from sys import stdin


def getParent(parent, x):
    # 부모노드를 찾는 함수
    if parent[x] == x:
        return x
    parent[x] = getParent(parent, parent[x])
    return parent[x]


def unionParent(parent, a, b):
    # 두 부모노드를 합치는 함수
    a = getParent(parent, a)
    b = getParent(parent, b)
    if a < b:
        parent[b] = a
    else:
        parent[a] = b


def findParent(parent, a, b):
    # 같은 부모를 가지는지 확인
    a = getParent(parent, a)
    b = getParent(parent, b)
    if a == b:
        return 1
    return 0


def solution(V, E):
    # 자기 자신을 부모로 설정
    parent = [i for i in range(V+1)]
    edges = []
    sum = 0

    for _ in range(E):
        a, b, cost = map(int, stdin.readline().rstrip().split(' '))
        edges.append([cost, a, b])

    edges.sort(key=lambda x: x[0])  # 가중치가 작은 순서대로 정렬

    for cost, a, b in edges:
        if not findParent(parent, a, b):  # 부모가 다르다는 것은 사이클이 생기지 않는다는 것을 의미
            unionParent(parent, a, b)
            sum += cost
        # 부모가 같으면 가중치가 작더라도 pass
    return sum


V, E = map(int, stdin.readline().rstrip().split(' '))
print(solution(V, E))
