n = int(input())
nums = list(map(int, input().split()))
count = 0

def isPrime(n):
    if n <= 1:
        return False
    for i in range(2, n-1):
        if n%i == 0:
            return False
    return True

for num in nums:
    if isPrime(num):
        count += 1

print(count)