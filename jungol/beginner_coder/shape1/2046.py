n, m = map(int, input().split())
array = [[0 for col in range(n)] for row in range(n)]

def printSquare(n, m):
    if m == 1:
        for i in range(n):
            num = 1
            for j in range(n):
                array[j][i] = num
                num += 1
        for k in array:
            for l in k:
                print(l, end=" ")
            print()

    elif m == 2:
        for i in range(n):
            num = 1
            if i % 2 == 0:
                for j in range(n):
                    print(num, end=" ")
                    array[i][j] = num
                    num += 1
            else:
                for j in range(n):
                    num += 1

                for k in range(num-1, num-1-n, -1):
                    col = 0
                    array[i][col] = k
                    print(array[i][col], end=" ")
                    col += 1
            print()

    elif m == 3:
        for i in range(n):
            for j in range(n):
                print((i+1)*(j+1), end=" ")
            print()

    else:
        print("잘못된 입력")

printSquare(n, m)