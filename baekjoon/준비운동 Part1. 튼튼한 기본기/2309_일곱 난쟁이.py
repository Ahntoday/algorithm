from itertools import combinations
answer = []
heights = []
for _ in range(9):
    heights.append(int(input()))

combis = list(combinations(heights, 7))

for combi in combis:
    if combi[0] + combi[1] + combi[2] + combi[3] + combi[4] + combi[5] + combi[6] == 100:
        answer = list(combi)
        break

answer.sort()
for i in range(len(answer)):
    print(answer[i])