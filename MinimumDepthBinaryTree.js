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

const minDepth = function(root){
    // BFS
    const queue = [root]
    let counter = 1
    while(queue.length){
        let level = queue.length
        while(level){
            const node = queue.shift()
            if(!node.left && !node.right){
                return counter
            }else{
                if(node.right) queue.push(node.right)
                if(node.left) queue.push(node.left)
            }
            level--
        }
        counter++
    }
return counter

}
const min = minDepth(b)
console.log(min)