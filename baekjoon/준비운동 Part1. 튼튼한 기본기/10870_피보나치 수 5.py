n = int(input())

nums = [0 for _ in range(n+1)]

for i in range(n+1):
    if n == 0:
        nums[i] = 0
        break
    if i == 0:
        nums[i] = 0
    if i == 1:
        nums[i] = 1
    else:
        nums[i] = nums[i-2] + nums[i-1]

print(nums[-1])