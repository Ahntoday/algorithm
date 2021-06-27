def solution(answers):
    answer = []
    # 정답지만큼 돌린다. 답이 같은지 비교한다. 사람마다 개수를 카운트한다.
    # 개수를 오름차순으로 정렬해서 반환

    supo1 = [1, 2, 3, 4, 5]
    supo2 = [2, 1, 2, 3, 2, 4, 2, 5]
    supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    grade = [0, 0, 0]
    for i in range(len(answers)):
        if answers[i] == supo1[i % 5]:
            grade[0] += 1
        if answers[i] == supo2[i % 8]:
            grade[1] += 1
        if answers[i] == supo3[i % 10]:
            grade[2] += 1

    # 수포자1, 2, 3중 가장 점수 높은 사람을 answer에 넣는다.
    max_grade = max(grade)
    for idx in range(len(grade)):
        if grade[idx] == max_grade:
            answer.append(idx + 1)

    return answer

print(solution([1,2,3,4,5])) #[1]
print(solution([1,3,2,4,2])) #[1, 2, 3]