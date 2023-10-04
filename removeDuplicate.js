// var removeDuplicates = function(nums) {
//     let arr = []

//     for(let i of nums){

//     }
//     return arr

// };

var removeDuplicates = function (nums) {
  const arr = nums;

  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[counter] = arr[i];
      counter++;
    }
  }
  return counter;
};

// const data = [1,1,2]
const data2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const result = removeDuplicates(data2);
// console.log(result)
