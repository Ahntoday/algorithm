m = int(input())
n = int(input())

def primeList(x):
    sieve = [True] * x

    y = int(x ** 0.5)
    for i in range(2, y+1):
        if sieve[i] == True:
            for j in range(i+i, x, i):
                sieve[j] = False

    return [i for i in range(2, x) if sieve[i] == True]

answer_list = [num for num in primeList(n+1) if m <= num <= n]

if len(answer_list) == 0:
    print(-1)
else:
    print(sum(answer_list))
    print(min(answer_list))
