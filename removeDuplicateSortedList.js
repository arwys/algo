
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

/**
* @param {ListNode} head
* @return {ListNode}
*/
var deleteDuplicates = function(head) {

    let dummy = new ListNode(-Infinity, head)
    let current = head// set head as current
    let prev = dummy // set as prev
   

    while(current){
        if(current.val === prev.val){
    
            while(current && current.val === prev.val){
                console.log(current)
                current = current.next
                console.log(current)
            }
            prev.next = current
        }else{
            prev = current
            current = current.next
        }
        
    }
    return dummy.next
   
};

const head = [1,1,2]

const b = deleteDuplicates(head)
console.log(b)

// explanation 

// 1 -> 1 -> 2

// Infinity  -> 1 -> 1 -> 2
// prev        current


// if(prev.value == current.value){
//     // current.next 
// }