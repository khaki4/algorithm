const fs = require("fs");
const [n, ...inputs] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const DP = Array(13).fill(0);
DP[1] = 1;
DP[2] = 2;
DP[3] = 4;

const go = (n) => {
  if (DP[n]) return DP[n];
  return (DP[n] = go(n - 1) + go(n - 2) + go(n - 3));
};

inputs.forEach((v) => {
  console.log(go(v));
});
