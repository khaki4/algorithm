n, m, k = map(int,input().split())
a = [list(map(int,input().split())) for _ in range(n)]
c = [[False]*m for _ in range(n)]
ans = -40000
dx = [0,0,1,-1]
dy = [1,-1,0,0]

def go(px, cnt, s):
    if cnt == k:
        global ans
        if ans < s:
            ans = s
        return
    for y in range(m):
      for x in range(px, n):
            if c[x][y]:
                continue
            ok = True
            for i in range(4):
                nx, ny = x+dx[i], y+dy[i]
                if 0 <= nx < n and 0 <= ny < m:
                    if c[nx][ny]:
                        ok = False
            if ok:
                c[x][y] = True
                go(x,cnt+1, s+a[x][y])
                c[x][y] = False

go(0, 0, 0)
print(ans)
                
                