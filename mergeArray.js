var merge = function (nums1, m, nums2, n) {


  if (m == 0) {
    return nums1 = nums2;
  }
  if (n == 0) {
   
    return nums1;
  }

  let val1 = m - 1;
  let val2 = n - 1;
  let pointer = nums1.length - 1;

  while (val2 >= 0) {
    if (nums2[val2] < nums1[val1]) {
      nums1[pointer] = nums1[val1];
      val1--;
      pointer--;
    } else {
      nums1[pointer] = nums2[val2];
      val2 -= 1;
      pointer--;
    }
  }
  return nums1;
};

const nums1 = [1,2,3,0,0,0];
const m = 3
const nums2 = [2,5,6];
const n = 3;

const response = merge(nums1, m, nums2, n);
console.log(response);


var merge = function(nums1, m, nums2, n) {
    const len = m + n
     nums1.splice(len-n)
     for (let i = 0; i < n; i++) {
       nums1.push(nums2[i])
     }
       
     for (let j = 1; j < len; j++) {
       if (nums1[j-1] || nums1[j-1] === 0) {
         if (nums1[j] < nums1[j-1]) {
           let tmp = nums1[j-1]
           nums1[j-1] = nums1[j]
           nums1[j] = tmp
           j = j-2
         }
       }
     }
    
   
       
   };
// 1 ,2, 3 , 0 , 0 , 0

//        f =  start (nums.length-1)  => m -1

// 2 , 5, 6,

//         ==> s => n -1
// pointer from ==> nums1.length -1
