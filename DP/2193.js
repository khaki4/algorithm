const fs = require("fs");
// const n = fs.readFileSync("/dev/stdin").toString() * 1;
const n = 3;

const DP = new Array(n + 1).fill(undefined).map((_) => new Array(2).fill(0));
DP[1] = [0, 1];

for (let i = 2; i <= n; i++) {
  
  for (let j = 0; j <= 1; j++) {
    if (j === 0) {
      DP[i][j] = DP[i - 1][j] + 1;
    } else {
      DP[i][j] = DP[i - 1][j];
    }
  }
}

console.log(DP[n]);
