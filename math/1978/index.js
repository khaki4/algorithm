const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...inputs] = fs.readFileSync(filePath).toString().trim().split("\n");

let res = 0;

inputs[0].split(" ").forEach((v) => {
  if (prime(Number(v))) {
    res += 1;
  }
});

console.log(res);

function prime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
