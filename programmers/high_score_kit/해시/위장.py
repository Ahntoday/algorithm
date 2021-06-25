def solution(clothes):
    answer = 1
    cloth = dict()

    for i in range(len(clothes)):
        if clothes[i][1] not in cloth.keys():
            cloth[clothes[i][1]] = 0
        cloth[clothes[i][1]] += 1

    for i in cloth.keys():
        answer *= cloth[i] + 1

    answer = answer - 1

    return answer

print(solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]))
print(solution([["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]]))