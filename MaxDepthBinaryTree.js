function Node(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = left === undefined ? null : right;
}

const b = new Node(3);
const c = new Node(9);
b.left = c;
const d = new Node(20);
b.right = d;
const e = new Node(15);
d.left = e;
const f = new Node(7);
d.right = f;
//   console.log('b',b)

//   const travel =(counter,root)=>{
//     //   if(!root) return null

//         let k = [];
//         function travelNode(arg, side, count) {
//         if(!arg) return null

//           if (arg.left) travelNode(arg.left, "left", count);

//           if (arg.right) travelNode(arg.right, "right", count);
//             count[side]++;
//         }
//         travelNode(root,"head",counter)
//         return counter
//   }
//   var maxDepth = function (root) {

//   if(!root) return 0
//       let counter = {
//           left: 0,
//           right: 0,
//           head:0
//         };
//         counter.right = 0
//       const res = travel(counter,root)

//   if(res.left >= res.right){
//       return res.left + 1
//   }else{
//      return res.right + 1
//   }
//     // return res

//   };
const travel = (root) => {
  let max = 0;
  function travelNode(arg, count) {
    if (!arg) return null;
    if (count > max) max = count;
    if (arg.left) travelNode(arg.left, count + 1);

    if (arg.right) travelNode(arg.right, count + 1);
  }
  travelNode(root, 1);
  return max;
};
var maxDepth = function (root) {
  if (!root) return 0;

  const res = travel(root);
  return res;
};
maxDepth(b);
