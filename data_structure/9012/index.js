const fs = require("fs");
const [n, ...str] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

class Stack {
  v = [];

  isValid(str) {
    if (str.startsWith(")")) {
      return false;
    }

    let valid = true;
    for (const c of str) {
      valid = this.fn(c);
      if (!valid) {
        break;
      }
    }
    return valid && this.v.length === 0;
  }

  fn(c) {
    switch (c) {
      case "(":
        this.v.push(1);
        break;
      case ")":
        if (this.v.length === 0) {
          return false;
        }
        this.v.pop();
        break;
    }
    return true;
  }
}

str.forEach((p) => {
  const s = new Stack();
  console.log(s.isValid(p) ? "YES" : "NO");
});
