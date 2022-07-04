N, r = map(int, input().split())

result = [0] * r
checklist = [0] * (N + 1)

def dfs(L, beginWith):
    if L == r:
        print(' '.join(map(str, result)))
    else:
        for i in range(beginWith, N + 1):
            result[L] = i
            dfs(L + 1, i + 1)

dfs(0, 1)