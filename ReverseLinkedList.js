/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
 const b = new ListNode(1,null)
 const f = new ListNode(2,null)
 const c = new ListNode(3,null)
 const g = new ListNode(4,null)

  const d = new ListNode(5,null)
  b.next =f
  f.next = c
  c.next = g
  g.next = d

 console.log(b)
 
 var reverseList = function(head,prev = null) {

    if(head === null) return prev
    const next = head.next
    head.next = prev
    return reverseList(next,head)



    
};
const res = reverseList(b)
console.log(res )

