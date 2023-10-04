/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {

    if (nums[i] in obj) {
      obj[nums[i]]++;
    } else {
        let b = 1
      obj[nums[i]] = 1;
    }
 
  }
  
  const result = Object.keys(obj)
  const d = result.filter(i=>obj[i]===1)

  return Number(d[0])


};

const data = [[ 2, 1, 2,1,4], [4, 1, 2, 1, 2], [1]];
const dataC = data[2];

// console.log(dataC);
singleNumber(dataC);
