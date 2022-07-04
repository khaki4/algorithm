const fs = require("fs");
const n = fs.readFileSync("/dev/stdin").toString() * 1;

const DP = new Array(n + 1).fill(undefined).map((_) => new Array(10).fill(0));

DP[1] = DP[1].map(() => 1);
DP[1][0] = 0;

for (let i = 2; i <= n; i++) {
  for (let j = 0; j <= 9; j++) {
    switch (j) {
      case 0:
        DP[i][j] = DP[i - 1][j + 1] % 1000000000;
        break;
      case 9:
        DP[i][j] = DP[i - 1][j - 1] % 1000000000;
        break;
      default:
        DP[i][j] = (DP[i - 1][j - 1] + DP[i - 1][j + 1]) % 1000000000;
    }
  }
}

const res = DP[n].reduce((acc, curr) => {
  acc += curr;
  return acc % 1000000000;
}, 0);

console.log(res);
