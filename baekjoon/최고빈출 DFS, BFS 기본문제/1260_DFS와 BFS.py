from collections import deque

# n: 정점의 개수, m: 간선의 개수, v: 시작 정점
n, m, v = map(int, input().split())
graph = [[] for _ in range(n+1)]
visited = [False for _ in range(n+1)] #각 노드가 방문된 정보를 표현

for i in range(m): #중요한 점! sort로 정렬해주고 stack이나 queue에 넣어야 한다.
    start, end = map(int, input().split())
    graph[start].append(end)
    graph[end].append(start)
    graph[start].sort()
    graph[end].sort()

def DFS(graph, start, visited):
    visited[start] = True #현재 노드를 방문 처리
    print(start, end=' ')

    for i in graph[start]: #현재 노드와 연결된 다른 노드를 재귀적으로 방문
        if not visited[i]:
            DFS(graph, i, visited)

def BFS(graph, start, visited):
    queue = deque([start]) #큐 구현을 위해 deque라이브러리 사용
    visited[start] = True #현재 노드를 방문 처리
    while queue: #큐가 빌 때까지 반복
        vertex = queue.popleft() #큐에서 하나의 원소를 뽑아 출력하기
        print(vertex, end=" ")
        for i in graph[vertex]: #아직 방문하지 않은 인접한 원소들을 큐에 삽입
            if not visited[i]:
                queue.append(i)
                visited[i] = True

DFS(graph, v, visited)
visited = [False for _ in range(n+1)] #각 노드가 방문된 정보를 표현
print()
BFS(graph, v, visited)