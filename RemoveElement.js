

var removeElement = function(nums, val) {
    let counter = 0

    for (let i = 0 ; i< nums.length ; i++){
        if(nums[i] !== val ){  
         nums[counter] = nums[i]
         counter++
        }

    }
    nums.splice(0,counter)
    console.log(nums.splice(0,counter))
};


const data = [3,2,2,3]
const target = 3
const result = removeElement(data,target)
