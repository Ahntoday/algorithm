n = int(input())

array = [[0 for i in range(n)] for j in range(n)]
character = 65
for i in range(n):
    for j in range(n):
        if i % 2 == 0: #열 0 2이면 그대로
            array[j][i] = chr(character)
        else: #열이 1 3이면 거꾸로
            array[n-j-1][i] = chr(character)

        character += 1
        if character > 90:
            character = 65

for i in array:
    for j in i:
        print(j, end=" ")
    print()