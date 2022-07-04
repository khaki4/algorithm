const fs = require("fs");
let n = fs.readFileSync("/dev/stdin").toString() * 1;

let limit = n * 2;
let i = 1;
while (i < limit) {
  if (i <= n) {
    console.log(`${"*".repeat(i)}${" ".repeat(limit - i * 2)}${"*".repeat(i)}`);
  } else {
    console.log(
      `${"*".repeat(limit - i)}${" ".repeat((i - n) * 2)}${"*".repeat(
        limit - i
      )}`
    );
  }

  i++;
}
