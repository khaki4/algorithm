const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, m] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(
  Math.min(
    factorialCnt2(n) - factorialCnt2(n - m) - factorialCnt2(m),
    factorialCnt5(n) - factorialCnt5(n - m) - factorialCnt5(m)
  )
);

function factorialCnt2(n) {
  let cnt = 0;
  for (let i = 2; i <= n; i *= 2) {
    cnt += parseInt(n / i);
  }
  return cnt;
}

function factorialCnt5(n) {
  let cnt = 0;
  for (let i = 5; i <= n; i *= 5) {
    cnt += parseInt(n / i);
  }
  return cnt;
}
