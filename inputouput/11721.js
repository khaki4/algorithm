const fs = require("fs");
const arr = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < arr.length; i += 10) {
  console.log(arr.slice(0, 10));
}
