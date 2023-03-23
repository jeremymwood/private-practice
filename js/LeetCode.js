'use strict';

const twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                console.log([i, j]);
                return [i, j]
            }
        }
    }
};

// twoSum([1,2,3], 4);
// twoSum([2,7,11,15], 9);
// twoSum([3,2,4], 6);
// twoSum([3,3], 6);

function threeSum(nums) {
    let found = false;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    console.log(`${nums[i]}, ${nums[j]}, ${nums[k]}`);
                    found = true;
                }
            }
        }
        if(found === false) {
            console.log("does not exist");
        }
    }
}
threeSum([0, -1, 2, -3, 1]);
threeSum([-1,0,1,2,-1,-4]);
// Output: [[-1,-1,2],[-1,0,1]]