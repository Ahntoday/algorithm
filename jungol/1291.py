# 구구단의 시작 범위 s와 끝 범위 e를 입력받는다. s와 e는 2부터 9사이의 정수
s, e = map(int, input().split())
if s and e not in range(2, 10):
    print("INPUT ERROR!")
    s, e = map(int, input().split())

if s < e:
    for j in range(1, 10):
        for i in range(s, e + 1):
            print('{0} * {1} = {2:>2}'.format(i, j, i*j), end='   ')
        print()

if s > e:
    for j in range(1, 10):
        for i in range(s, e-1, -1):
            print('{0} * {1} = {2:>2}'.format(i, j, i * j), end='   ')
        print()