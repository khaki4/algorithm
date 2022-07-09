const fs = require("fs");
const [n, ...inputs] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const DP = genDP();

inputs.forEach((v) => {
  console.log(DP[v * 1]);
});

function genDP() {
  const DP = new Array(10 + 1).fill(0);
  DP[1] = 1;
  DP[2] = 2;
  DP[3] = 4;

  for (let i = 4; i <= 11; i++) {
    DP[i] = DP[i - 1] + DP[i - 2] + DP[i - 3];
  }
  return DP;
}

/**
 *
 * 재귀 풀이
 */

const go = (n) => {
  if (DP[n]) return DP[n];
  return (DP[n] = go(n - 1) + go(n - 2) + go(n - 3));
};

inputs.forEach((v) => {
  console.log(go(v));
});
