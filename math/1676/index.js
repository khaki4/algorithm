const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const n = fs.readFileSync(filePath).toString().trim() * 1;

let cnt = 0;
for (let i = 5; i <= n; i *= 5) {
  cnt += parseInt(n / i);
}

console.log(cnt);
