'use strict';

// function simpleArraySum(ar) {
//     let sum = 0;
//     for (let i = 0; i < ar.length; i++){
//         sum += ar[i]
//     }
//     console.log(sum);
//     return sum;
// }
//
// simpleArraySum([1, 2, 3, 4, 10, 11]);


// function compareTriplets(a, b) {
//     let aliceScore = 0;
//     let bobScore = 0;
//     if (a.length === b.length) {
//         for (let i = 0; i < a.length; i++) {
//             if (a[i] > b[i]) {
//                 aliceScore += 1;
//             }
//             if (a[i] < b[i]) {
//                 bobScore += 1;
//             }
//         }
//         return [aliceScore , bobScore];
//     };
// }
//
// let  a = [1, 2, 3]
// let  b = [3, 2, 1]
// console.log(compareTriplets(a , b));

// function aVeryBigSum(ar) {
//     let sum = 0;
//     for (let i = 0; i < ar.length; i++){
//         sum += ar[i]
//     }
//     console.log(sum);
//     return sum;
// }
//
// aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);

// function diagonalDifference(arr) {
//     let a = 0;
//     let b = 0;
//     let backwards = arr.length -1;
//
//     for (let i = 0; i < arr.length; i++) {
//         a += arr[i][i];
//         b += arr[i][backwards];
//         console.log(backwards);
//         console.log(`a = ${a}`);
//         console.log(`b = ${b}`);
//
//         backwards -= 1;
//     }
//
//     return Math.abs(a - b);
// }
//
//
// console.log(diagonalDifference([
//     [11, 2, 4],
//     [4, 5, 6],
//     [10, 8, -12]
// ]))

// function plusMinus(arr) {
//     let total = arr.length;
//     let pos = 0;
//     let neg = 0;
//     let zero = 0;
//     for (let i = 0; i < total; i++) {
//         if (arr[i] > 0) {
//             pos += 1;
//         }
//         if (arr[i] < 0) {
//             neg += 1;
//         }
//         if (arr[i] === 0) {
//             zero += 1;
//         }
//     }
//     let posR = (pos / total).toFixed(6);
//     let negR = (neg / total).toFixed(6);
//     let zeroR = (zero / total).toFixed(6);
//     console.log(`${posR}`);
//     console.log(`${negR}`);
//     console.log(`${zeroR}`);
// }
//
// plusMinus([1,1,0,-1,-1]);

// function staircase(n) {
//     let arr = "";
//     for (let i = 1; i < n + 1; i++) {
//         arr += " ";
//     }
//     for (let i = n - 1; i >= 0; i--) {
//         arr = arr.substring(0, i) + "#" + arr.substring(i + 1);
//         console.log(arr)
//     }
// }
// staircase(10);

function miniMaxSum(arr) {
    let sumLength = arr.length;
    let min;
    let max;
    let tempSum = 0;

    for (let i = 0; i < sumLength; i++) {

        for (let j = 0; j < sumLength; j++) {
            if (j === i) continue;
            tempSum += arr[j];
        }

        if (min !== undefined && max !== undefined) {
            if (tempSum > max) {
                max = tempSum;
            }
            if (tempSum < min) {
                min = tempSum;
            }
        } else {
            min = tempSum;
            max = tempSum;
        }
        tempSum = 0;
    }
        console.log(`${min} ${max}`);
}
miniMaxSum([7, 69, 2, 221, 8974]);
miniMaxSum([1,2,3,4,5]);
miniMaxSum([1,3,5,7,9]);