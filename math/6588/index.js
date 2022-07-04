const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

const nums = inputs.map(Number);
const maxNum = Math.max(...nums);
const check = filterTool(maxNum);

let res = "";
nums.forEach(isValidGoldbach);
console.log(res);

function filterTool() {
  const n = 1000000;
  const check = Array(n + 1).fill(false);

  for (let i = 2; i <= n; i++) {
    if (!check[i]) {
      for (let j = i + i; j <= n; j += i) {
        check[j] = true;
      }
    }
  }
  return check;
}

function isValidGoldbach(n) {
  if (n === 0) return;
  let isValid = false;
  for (let i = 3; i <= n; i++) {
    const a = i;
    const b = n - i;
    if (a <= b) {
      const p = check[a];
      const q = check[b];
      if (!p && !q) {
        res += `${n} = ${a} + ${b}\n`;
        isValid = true;
        break;
      }
    }
  }
  if (!isValid) {
    res += "Goldbach's conjecture is wrong.\n";
  }
}
