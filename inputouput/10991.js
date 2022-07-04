const fs = require("fs");
let n = fs.readFileSync("/dev/stdin").toString() * 1;

for (let i = 1; i <= n; i++) {
  console.log(`${" ".repeat(n - i)}*${" *".repeat(i - 1)}`);
}
