n = int(input())
if n < 1 or n > 100:
    n = int(input())

array = [[0 for i in range(n)] for j in range(n)]
character = 65
for i in range(n):
    for j in range(n):
        array[n-j-1][n-i-1] = chr(character)
        character += 1
        if character >= 91:
            character = 65

for i in array:
    for j in i:
        print(j, end=" ")
    print()