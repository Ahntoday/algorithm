n, m = map(int, input().split())
num = 1
for i in range(n):
    if i % 2 == 0:
        for j in range(m):
            print(num, end=" ")
            num += 1
    else:
        for k in range(m):
            num += 1

        for l in range(num-1, num-1-m, -1):
            print(l, end= " ")

    print()