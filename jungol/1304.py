n = int(input())

arr = [[0 for col in range(n)] for row in range(n)]
number = 1
for i in range(n):
    for j in range(n):
        arr[j][i] = number
        number += 1

for i in arr:
    for j in i:
        print(j, end=" ")
    print()