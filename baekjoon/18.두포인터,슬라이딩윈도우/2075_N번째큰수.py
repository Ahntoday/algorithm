import heapq

n = int(input())
graph = []
for i in range(n):
    graph.append(list(map(int, input().split())))

heap = []
heapq.heapify(heap)
print(graph)
for i in range(n):
    for j in range(n):
        heapq.heappush(heap, graph[i][j])
        print(heap)
        if len(heap) > n:
            heapq.heappop(heap)
print(heapq.heappop(heap))
