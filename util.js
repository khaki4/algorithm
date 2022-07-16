function zip(a, b) {
  const len = a.length;
  const res = [];
  for (let i = 0; i < len; i++) {
    res.push([a[i], b[i]]);
  }
  return res;
}
