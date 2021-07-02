datas = list(map(str, input().split(' ')))
declarations = []

basic_type = datas[0]
del datas[0]

print(datas)

for data in datas:
    data = data.replace(',','').replace(';','')

    print(basic_type, end='')

    for i in range(len(data)-1,0,-1):
        if not data[i].isalpha():
            if data[i] == ']':
                print('[', end='')
            elif data[i] == '[':
                print(']', end='')
            else:
                print(data[i], end='')

    print(' ', end='')

    for i in range(len(data)):
        if data[i].isalpha():
            print(data[i], end='')

    print(';')