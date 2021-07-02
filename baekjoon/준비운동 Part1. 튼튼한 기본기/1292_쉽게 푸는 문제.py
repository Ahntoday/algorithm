a, b = map(int, input().split())

problem = []
for i in range(1, b+1):
    problem += [i]*i

print(sum(problem[a-1:b]))