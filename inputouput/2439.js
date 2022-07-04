const fs = require("fs");
let num = fs.readFileSync("/dev/stdin").toString() * 1;

for (let i = 1; i <= num; i++) {
  console.log(`${" ".repeat(num - i)}${"*".repeat(i)}`);
}
