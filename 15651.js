const N = 4;
const r = 2;

const result = [];

function dfs(L) {
  if (L == r) {
    console.log(result.join(" "));
    return;
  }

  for (let i = 1; i <= N; i++) {
    result[L] = i;
    dfs(L + 1);
  }
}

dfs(0, 1);
