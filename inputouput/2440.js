const fs = require("fs");
let n = fs.readFileSync("/dev/stdin").toString() * 1;

for (let i = n; i > 0; i--) {
  console.log(`${"*".repeat(i)}`);
}
