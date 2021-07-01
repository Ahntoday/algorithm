t = int(input())

for i in range(t):
    n = int(input())
    n = str(bin(n)[2:])
    for j in range(1, len(n) + 1):
        if n[-j] == '1':
            print(j - 1, end=' ')