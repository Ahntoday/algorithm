def solution(participant, completion):
    # 해시(딕셔너리)로 참가자 이름을 Key로, 숫자 count를 value로 한다.
    # participant의 key로 completion의 key의 count가 다르면 answer

    answer = ''
    part_dict = {}
    comp_dict = {}

    for p in participant:
        if p in part_dict:  # 이미 기입한 거면 +1
            part_dict[p] += 1
        else:  # 새로 기입하는 거면
            part_dict[p] = 1

    for p in participant:  # p에 있는 것 comp_dict에 초기화
        if p not in comp_dict:
            comp_dict[p] = 0

    for c in completion:  # completion에 있는 것 count 세기
        comp_dict[c] += 1

    for p in participant:
        if part_dict[p] != comp_dict[p]:
            answer = p

    return answer

print(solution(["leo", "kiki", "eden"], ["eden", "kiki"]))