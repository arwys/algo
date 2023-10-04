/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// rules : O log N
var searchInsert = function (nums, target) {
  let found = 0;
  let res = 0;
n
  while (nums.length !== found) {
    if (target > nums[found]) {
      if (target === nums[found]) {
        res = found;
      } else {
        if (nums[found] > target) {
          res = found
          console.log(res)
        } else {
          res = found + 1;
        }
      }
    }

    found++;
  }
  return res;
};

const data = [1, 3, 5, 6];
// const data = [-3,-1,3,90]
// const tar = 0
const tar = 7
const result = searchInsert(data, tar);
console.log(result)
