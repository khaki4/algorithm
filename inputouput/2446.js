const fs = require("fs");
let n = fs.readFileSync("/dev/stdin").toString() * 1;

let emptyCnt = -1;
for (let i = 0; i < n; i++) {
  emptyCnt += 1;
  console.log(`${" ".repeat(emptyCnt)}${"*".repeat((n - i) * 2 - 1)}`);
  emptyCnt;
}

for (let j = 2; j <= n; j++) {
  emptyCnt -= 1;
  emptyCnt;
  console.log(`${" ".repeat(emptyCnt)}${"*".repeat(j * 2 - 1)}`);
}
