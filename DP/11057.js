const fs = require("fs");
const n = fs.readFileSync("/dev/stdin").toString() * 1;

const DP = new Array(n + 1).fill(undefined).map((_) => new Array(10).fill(0));
DP[1] = DP[1].map(() => 1);

for (let i = 2; i <= n; i++) {
  for (let j = 0; j <= 9; j++) {
    let sum = 0;
    for (let k = 0; k <= j; k++) {
      sum += DP[i - 1][k] % 10007;
    }
    DP[i][j] = sum;
  }
}

console.log(DP[n].reduce((acc, curr) => acc + curr, 0) % 10007);
