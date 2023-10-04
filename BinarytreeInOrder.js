/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function Node(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = left === undefined ? null : right;
}

const b = new Node(1);
const c = new Node(null);
b.left = c;
const d = new Node(2);
b.right = d;
const e = new Node(3);
d.left = e;

var inorderTraversal = function (root) {
  let result = [];
  function travelsalStack(node) {
    if (!root) return;
    if (node.left) travelsalStack(node.left);
    result.push(node.val);
    if (node.right) travelsalStack(node.right);
  }
  travelsalStack(root);
  return result;
};
const res = inorderTraversal(b);
console.log(res);
