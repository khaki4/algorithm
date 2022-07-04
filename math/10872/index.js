const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const inputs = fs.readFileSync(filePath).toString().trim();

console.log(factorial(Number(inputs)));
function factorial(n) {
  return Array.from({ length: n }, (_, i) => i + 1).reduce((total, curr) => {
    total *= curr;
    return total;
  }, 1);
}
