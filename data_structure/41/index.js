const fs = require("fs");
const [n, ...cmd] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

class Stack {
  values = [];
  res = "";
  fn(cmd) {
    switch (cmd[0]) {
      case "push":
        return this.values.push(Number(cmd[1]));
      case "pop":
        if (this.values.length === 0) {
          this.res += "-1\n";
          return;
        }
        this.res += this.values.pop().toString() + "\n";
        return;
      case "top":
        if (this.values.length === 0) {
          this.res += "-1\n";
          return;
        }
        this.res += this.values[this.values.length - 1].toString() + "\n";
        return;
      case "empty":
        this.res += (this.values.length === 0 ? 1 : 0).toString() + "\n";
        return;
      case "size":
        this.res += this.values.length.toString() + "\n";
        return;
    }
  }
}

const s = new Stack();

cmd.forEach((inputs) => {
  s.fn(inputs.split(" "));
});
console.log(s.res);
