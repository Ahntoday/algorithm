people = dict()
answer = 0
peopleBus = [0 for _ in range(10)]
for i in range(10):
    n, m = map(int, input().split())
    people[i] = [n, m]

for i in range(len(people)):
    peopleBus[i] = peopleBus[i-1] - people[i][0]
    peopleBus[i] += people[i][1]

answer = max(peopleBus)

print(answer)