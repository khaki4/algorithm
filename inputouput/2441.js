const fs = require("fs");
let n = fs.readFileSync("/dev/stdin").toString() * 1;

for (let i = 0; i < n; i++) {
  console.log(`${" ".repeat(i)}${"*".repeat(n - i)}`);
}
