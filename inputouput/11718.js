const fs = require("fs");
const arr = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (const str of arr) {
  console.log(str);
}
