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

// function threeSum(nums) {
//     let arr = [];
//     for (let i = 0; i < nums.length - 2; i++) {
//         for (let j = i + 1; j < nums.length - 1; j++) {
//             for (let k = j + 1; k < nums.length; k++) {
//                 if (nums[i] + nums[j] + nums[k] === 0) {
//                     arr.push([nums[i], nums[j], nums[k]]);
//                 }
//             }
//         }
//     }
//     console.log(arr)
// }

function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const triplets = [];
    for (let i = 0; i < n; i++) {
        // Skip the duplicates
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        // Left and right pointers
        let j = i + 1;
        let k = n - 1;
        // Loop for all the remaining pairs
        while (j < k) {
            if (nums[i] + nums[j] + nums[k] === 0) {
                triplets.push([nums[i], nums[j], nums[k]]);
                j++;
                // Never let j refer to the same value twice (in an output) to avoid duplicates
                while (j < k && nums[j] === nums[j - 1]) {
                    j++;
                }
            } else if (nums[i] + nums[j] + nums[k] < 0) {
                j++;
            } else {
                k--;
            }
        }
    }
    console.log(triplets);
};

threeSum([-1,0,1,2,-1,-4]);
// threeSum([0, -1, 2, -3, 1]);
// threeSum([-1,0,1,2,-1,-4]);
// Output: [[-1,-1,2],[-1,0,1]]