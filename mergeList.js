const list1 = [1, 2, 4];
const list2 = [1, 3, 4];

// const list1 = [], list2 = []

// var mergeTwoLists = function(list1, list2) {
//     const looping = Math.max(list1.length,list2.length)
//     let data = []

//     for (let i= 0 ; i < looping; i+=1){
//             data = [...data,list1[i],list2[i]]
//         }

//    return data.filter(i=>i !== undefined)

// };

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {
  const data = new ListNode(-Infinity);
  let prev = data;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      prev.next = list1;
      prev = list1;
      list1 = list1.next;
    } else {
      prev.next = list2;
      prev = list2;
      list2 = list2.next;
    }
  }

  if (!list1) prev.next = list2;
  if (!list2) prev.next = list1;

  return data.next;
};
const result = mergeTwoLists(list1, list2);
console.log(result);
