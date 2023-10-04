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
  
//   const b = new Node(1);
//   const c = new Node(null);
//   b.left = c;
//   const d = new Node(2);
//   b.right = d;
//   const e = new Node(3);
//   d.left = e;

const b = new Node(1);
const c = new Node(4);
b.left = c;
const d = new Node(2);
b.right = d;
const e = new Node(3);
c.left = e;
// console.log(b)



var preorderTraversal = function(root) {
    if(!root) return []

    const stack = [root]
    const result = []

    while (stack.length){
        const node = stack.pop()
        result.push(node.val)
        if(node.right) stack.push(node.right)
        if(node.left) stack.push(node.left)

    }
   return result
 
};

const res1 = preorderTraversal(b)


// recursive ways


function recurs (node,arr){
    if(!node) return []
    arr.push(node.val)
    if(node.left) recurs(node.left,arr)
    if(node.right) recurs(node.right,arr)
}

var recursivePreorderTraversal = function(root) {
    let result = []

    recurs(root,result)

    return result
};

const res = recursivePreorderTraversal(b)
console.log(res,res1)


// 1 

// 4 3 
// 2
//             ====> stack 

//             pop (1) ===> 1
//             check (1)