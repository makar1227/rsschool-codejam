function recursion(obj) {
  let res = [];
  treeParse(obj, 0, res);
  return res;
}

function treeParse(tree, i, res) {
  for (let k in tree) {
    if (typeof tree[k] === 'object' && tree[k] !== null) {
      treeParse(tree[k], i + 1, res);
    } else {
      if (res.length < i + 1) {
        res.push([]);
      }
      res[i].push(tree[k]);
    }
  }
}

module.exports = recursion;
