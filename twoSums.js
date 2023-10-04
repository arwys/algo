function twoSum (nums, target) {
    let arr = {}

 for(let i = 0 ; i <= nums.length; i++){
     if(arr[nums[i]]>=0){
         return [arr[nums[i]],i]
     }
     arr[target-nums[i]] = i
 }
 return []
};

const result = twoSum([2,7,4,11,15],13)
console.log(result)