'use strict';

const twoSum = function(nums, target) {
    let numsArr = [];
    let newArr = [];
    for (let i = 0; i < nums.length; i++) {
        numsArr.push(nums[i]);
        // console.log(numsArr);
        newArr.push(i);
        // console.log(newArr);
        let numsSum = numsArr.reduce((a, b) => a + b, 0);
        // console.log(numsSum);
        if (numsSum === target) {
            console.log(newArr);
            // return newArr;
            break;
        }
    }
};

// twoSum([1,2,3], 3);
twoSum([2,7,11,15], 9);
twoSum([3,2,4], 6);
twoSum([3,3], 6);
