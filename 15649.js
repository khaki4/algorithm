/**
 *
 * 필요 조건
 * - L 이 limit 이면 리턴
 * - 중복 체크
 * - 되돌아 가기
 */


function dfs(L, n, r, checkList, result) {
  // 종료 조건
  if (L === r) {
    console.log(result.join(" "));
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (checkList[i] === false) {
      checkList[i] = true;
      result[L] = i;
      dfs(L + 1, n, r, checkList, result);
      checkList[i] = false;
    }
  }
}

function permutation(n, r) {
  const result = [];

  const checkList = Array(n + 1).fill(false);
  dfs(0, n, r, checkList, result);
}

permutation(4, 2);
