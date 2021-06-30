def solution(nums):  # N/2선택해야 하는데, 가장 많은 종류의 폰켓몬을 선택하고 싶음.
    answer = 0
    N = len(nums) // 2
    ponketmon = list(set(nums))
    if len(ponketmon) > N:  # 포켓몬 종류 수가 더 많으면, 최대가 N개니까 N개.
        answer = N
    else:
        answer = len(ponketmon)  # 포켓몬 종류 수가 더 적으면, 포켓몬 종류 수.

    return answer

print(solution([3,1,2,3])) #2
print(solution([3,3,3,2,2,4])) #3
print(solution([3,3,3,2,2,2])) #2