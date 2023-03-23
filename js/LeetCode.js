'use strict';

// const twoSum = function(nums, target) {
//     let numsArr = [];
//     let newArr = [];
//     for (let i = 0; i < nums.length; i++) {
//         numsArr.push(nums[i]);
//         newArr.push(i);
//         let numsSum = numsArr.reduce((a, b) => a + b, 0);
//         if (numsSum === target) {
//             console.log(newArr);
//             break;
//         }
//     }
// };


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

// twoSum([1,2,3], 3);
twoSum([2,7,11,15], 9);
twoSum([3,2,4], 6);
twoSum([3,3], 6);
