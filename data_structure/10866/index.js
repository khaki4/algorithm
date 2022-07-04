const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...cmds] = fs.readFileSync(filePath).toString().trim().split("\n");

const dq = [];
let res = "";
cmds.forEach((v) => {
  const cmd = v.split(" ");
  dq;
  switch (cmd[0]) {
    case "push_front":
      dq.unshift(cmd[1]);
      break;
    case "push_back":
      dq.push(cmd[1]);
      break;
    case "pop_front":
      if (dq.length === 0) {
        res += "-1\n";
      } else {
        res += dq.shift() + "\n";
      }
      break;
    case "pop_back":
      if (dq.length === 0) {
        res += "-1\n";
      } else {
        res += dq.pop() + "\n";
      }
      break;
    case "size":
      res += dq.length + "\n";
      break;
    case "empty":
      if (dq.length === 0) {
        res += "1\n";
      } else {
        res += "0\n";
      }
      break;
    case "front":
      if (dq.length === 0) {
        res += "-1\n";
      } else {
        res += dq[0] + "\n";
      }
      break;
    case "back":
      if (dq.length === 0) {
        res += "-1\n";
      } else {
        res += dq[dq.length - 1] + "\n";
      }
      break;
  }
});

console.log(res);
