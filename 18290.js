// 조합

const N = 2;
const M = 2;
const r = 2;

const result = [];
const x = Array(N).fill(0);

for (let j = 0; j < M; j++) {
  x.push();
}

function dfs(L, beginWith) {
  if (L == r) {
    console.log(result.join(" "));
    return;
  }

  for (let i = beginWith; i <= N; i++) {
    result[L] = i;
    dfs(L + 1, i + 1);
  }
}

dfs(0, 1);
