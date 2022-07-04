const fs = require("fs");
const [n, ...str] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let res = "";

str.forEach((v) => {
  res += v
    .split(" ")
    .map((p) => p.split("").reverse().join(""))
    .join(" ");
  res += "\n";
});
console.log(res);
