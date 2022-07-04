const fs = require("fs");
let n = fs.readFileSync("/dev/stdin").toString() * 1;

for (i = 1; i <= n; i++) {
  const innerEmpty = 2 * n - 1 - (n - i) * 2 - 2;

  if (i === 1) {
    console.log(`${" ".repeat(n - 1)}*`);
  } else if (i === n) {
    console.log(`${"*".repeat(n * 2 - 1)}`);
  } else {
    console.log(`${" ".repeat(n - i)}*${" ".repeat(innerEmpty)}*`);
  }
}
