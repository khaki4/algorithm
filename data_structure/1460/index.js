const fs = require("fs");
const [str, n, ...cmds] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const LS = str.split("");
const RS = [];

cmds.forEach((v) => {
  const c = v.split(" ");
  switch (c[0]) {
    case "L":
      if (LS.length !== 0) {
        RS.push(LS.pop());
      }
      break;
    case "D":
      if (RS.length !== 0) {
        LS.push(RS.pop());
      }
      break;
    case "B":
      LS.pop();
      break;
    case "P":
      LS.push(c[1]);
      break;
  }
});

console.log(LS.join("") + RS.reverse().join(""));
