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

function diagonalDifference(arr) {
    let a = 0;
    let b = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     a += arr[i][i];
    //
    //     for (let j = arr.length -1; j > 0; j--) {
    //         b += arr[i][j];
    //         console.log(b);
    //     }
    // }
    // console.log(a);

    //todo need to loop through

    a += arr[0][0] + arr[1][1] + arr[2][2];
    b += arr[0][2] + arr[1][1] + arr[2][0];
    return Math.abs(a - b);
}


console.log(diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
]))
// diagonalDifference([
//     [11, 2, 4],
//     [4, 5, 6],
//     [10, 8, -12]
// ]);