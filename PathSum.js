function Node(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = left === undefined ? null : right;
}

const b = new Node(5);
const c = new Node(4);

const d = new Node(8);

const e = new Node(11);

const f = new Node(7);

const g = new Node(2);

const h = new Node(13);

const i = new Node(4);

const j = new Node(1);
b.right = d;
b.left = c;
d.right = i;
c.left = e;
d.left = h;
e.left = g;
e.right = f;

i.right = j;

var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  let isFound = false;

  function DFS(node, sum) {
    if (node.left === null && node.right === null) {
      if (sum === node.val) {
        isFound = true;
      }
      return;
    }
    if (node.left) DFS(node.left, sum - node.val);
    if (node.right) DFS(node.right, sum - node.val);
  }
  DFS(root, targetSum);

  return isFound;
};
// console.log(b)
const hasPathSumResult = hasPathSum(b, 22);
console.log(hasPathSumResult);
