const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const inputs = fs.readFileSync(filePath).toString().trim();

const stack = [];
let res = 0;

for (const i of [...inputs].keys()) {
  const input = inputs[i];
  if (input === "(") {
    stack.push(i);
  } else if (input === ")") {
    if (stack[stack.length - 1] - i === -1) {
      stack.pop();
      res += stack.length;
    } else {
      stack.pop();
      res += 1;
    }
  }
}

console.log(res);
