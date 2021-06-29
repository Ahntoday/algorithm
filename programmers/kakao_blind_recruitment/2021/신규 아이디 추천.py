import re

def solution(new_id):
    answer = ''
    i = 0

    new_id = new_id.lower()  # 1단계: 소문자로 치환
    new_id = re.sub("[^a-z0-9\-\_.]", "", new_id)  # 2단계: 문자제거

    new_id = re.sub("[..]+", '.', new_id)  # 3단계: 2번 이상 .연속된 부분 하나로

    new_id = new_id.strip('.')  # 4단계. 마침표가 처음이나 끝에 위치한다면 제거

    if len(new_id) == 0:  # 5단계
        new_id = 'a'

    if len(new_id) >= 16:  # 6단계
        new_id = new_id[0:15]
        new_id = new_id.strip('.')

    if len(new_id) <= 2:  # 7단계
        i = 3 - len(new_id)
        new_id += new_id[-1] * i

    answer = new_id
    return answer

print(solution("...!@BaT#*..y.abcdefghijklm")) #"bat.y.abcdefghi"
print(solution("z-+.^.")) #"z--"
print(solution("=.=")) #"aaa"
print(solution("123_.def")) #"123_.def"
print(solution("abcdefghijklmn.p")) #"abcdefghijklmn"
