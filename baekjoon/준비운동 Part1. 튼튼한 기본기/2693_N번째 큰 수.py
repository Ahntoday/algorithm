t = int(input())
answer = []
datas = []
for _ in range(t):
    datas.append(list(map(int, input().split())))

for data in datas:
    data.sort()
    answer.append(data[7])

for i in range(len(answer)):
    print(answer[i])