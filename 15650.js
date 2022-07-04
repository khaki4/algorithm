/**
 * 특정 시점에서 시작하기 -> beginWith
 */

const N = 4;
const r = 2;

const result = [];

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
