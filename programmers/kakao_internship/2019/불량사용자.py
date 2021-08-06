from itertools import permutations


def isMatchId(ban_id, user_id):
    for i in range(len(ban_id)):
        if ban_id[i] == '*':
            continue
        elif ban_id[i] != user_id[i]:
            return False
    return True


def check(banned_ids, users):
    for i in range(len(banned_ids)):
        if len(banned_ids[i]) != len(users[i]):
            return False
        if isMatchId(banned_ids[i], users[i]) is False:
            return False
    return True


def solution(user_id, banned_id):
    answer = list()

    for users in permutations(user_id, len(banned_id)):
        if check(banned_id, users) is True:
            users = set(users)
            if users not in answer:
                answer.append(users)
    print(answer)
    return len(answer)
