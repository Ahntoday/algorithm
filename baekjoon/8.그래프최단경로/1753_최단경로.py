# -*- coding: utf8 -*-
# 다익스트라 알고리즘
import sys
import heapq

input = sys.stdin.readline
INF = sys.maxsize


def dijkstra(V, K, graph):
    dist = [INF] * V
    # 가중치 테이블에서 시작 정점에 해당하는 가중치는 0으로 초기화
    dist[K-1] = 0
    h = []
    heapq.heappush(h, [0, K-1])

    # 힙에 원소가 없을 때까지 반복
    while h:
        weight, now = heapq.heappop(h)

        # 현재 테이블과 비교하여 더 가중치가 큰 튜플이면 무시
        if dist[now] < weight:
            continue

        for next_node, w in graph[now]:
            # 현재 정점까지의 가중치 weight + 현재 정점에서 다음 정점까지의 가중치 w
            next_weight = weight + w
            if next_weight < dist[next_node]:
                dist[next_node] = next_weight
                heapq.heappush(h, [next_weight, next_node])

    return dist


V, E = map(int, input().rstrip().split(' '))
K = int(input().rstrip())

graph = [[] for _ in range(V)]

for _ in range(E):
    u, v, w = map(int, input().rstrip().split(' '))
    graph[u-1].append([v-1, w])

for dist in dijkstra(V, K, graph):
    if dist != INF:
        print(dist)
    else:
        print("INF")
