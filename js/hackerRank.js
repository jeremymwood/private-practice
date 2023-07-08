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

// function miniMaxSum(arr) {
//     let sumLength = arr.length;
//     let min;
//     let max;
//     let tempSum = 0;
//
//     for (let i = 0; i < sumLength; i++) {
//
//         for (let j = 0; j < sumLength; j++) {
//             if (j === i) continue;
//             tempSum += arr[j];
//         }
//
//         if (min !== undefined && max !== undefined) {
//             if (tempSum > max) {
//                 max = tempSum;
//             }
//             if (tempSum < min) {
//                 min = tempSum;
//             }
//         } else {
//             min = tempSum;
//             max = tempSum;
//         }
//         tempSum = 0;
//     }
//         console.log(`${min} ${max}`);
// }
// miniMaxSum([7, 69, 2, 221, 8974]);
// miniMaxSum([1,2,3,4,5]);
// miniMaxSum([1,3,5,7,9]);

// function birthdayCakeCandles(candles) {
//
//     let max = 0;
//     for (let i = 0; i < candles.length; i++) {
//         if (candles[i] > max) {
//             max = candles[i];
//         }
//     }
//     // console.log(max);
//
//     let count = 0;
//     for (let i = 0; i < candles.length; i++) {
//         if (candles[i] === max) {
//             count += 1;
//         }
//     }
//     console.log(count);
// }
//
// birthdayCakeCandles([4,4,1,3]);
//
// function timeConversion(s) {
//     let milTime;
//     let hour = parseInt(s.substring(2,0));
//     let suffix = s.slice(-2);
//
//     if (hour > 0 && hour < 12) {
//         if (suffix === "AM") {
//             milTime = s.slice(0, -2);
//         } else {
//             milTime = (hour + 12).toString().concat(s.slice(2, -2))
//         }
//     } else {
//         if (suffix === "AM") {
//             milTime = ("00").concat(s.slice(2, -2));
//         } else {
//             milTime = s.slice(0, -2);
//         }
//     }
//         return milTime;
// }
//
// console.log(timeConversion('08:01:02PM'));
//
// function kangaroo(x1, v1, x2, v2) {
//     // Write your code here
//
// }
// kangaroo(2,1,1,2);
//
// function gradingStudents(grades) {
//     let rounded = [];
//     for (let i = 0; i < grades.length; i++) {
//         if (grades[i] > 37) {
//             if ((grades[i]%5) >= 3) {
//                 //round up
//                 rounded.push(grades[i] - grades[i]%5 + 5);
//             } else {
//                 rounded.push(grades[i]);
//             }
//         } else {
//             rounded.push(grades[i]);
//         }
//     }
//     return rounded;
// }
// console.log(gradingStudents([ 73, 67, 38, 33 ]));

// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//     let appleCount = 0
//     let orangeCount = 0
//     for (let i = 0; i < apples.length; i++) {
//         if (apples[i] + a >= s && apples[i] + a <= t) {
//             appleCount++
//         }
//     }
//     console.log(appleCount)
//
//     for (let j = 0; j < oranges.length; j++) {
//         if (oranges[j] + b >= s && oranges[j] + b <= t) {
//             orangeCount++
//         }
//     }
//     console.log(orangeCount)
// }
//
// countApplesAndOranges(7, 11,5, 15,[ -2, 2, 1 ],[ 5, -6 ])
//
// function kangaroo(x1, v1, x2, v2) {
//     let answer = 0;
//     if (x1 !== x2) {
//         do {
//             answer++;
//             x1 += v1;
//             x2 += v2;
//             if (x1 === x2) {
//                 console.log('yes')
//                 console.log(answer);
//                 console.log(`x1: ${x1}`);
//                 console.log(`x2: ${x2}`);
//                 return 'yes'
//             }
//         } while (answer <= 10000);
//         console.log('no')
//         console.log(answer);
//         console.log(`x1: ${x1}`);
//         console.log(`x2: ${x2}`);
//         return 'no'
//     }
//
//
// }
// kangaroo(2, 1, 1, 2);

//
// function getTotalX(a, b) {
//     let arr = [];
//     for (let i = 0; i < a.length; i++) {
//         let tempInt;
//         for (let j = 2; j <= a[i]; j++) {
//             tempInt = a[i] % j;
//             if (Number.isInteger(tempInt) && tempInt > 1) {
//                 arr.push(tempInt);
//             }
//         }
//     }
//     console.log(arr);
// }
// getTotalX( [ 2, 6], [ 24, 36]);
//
// function serviceLane(n, cases) {
//     let result = '';
//     for (let i = 0; i < cases.length; i++) {
//         let currentCase = cases[i];
//         let width = [];
//         for (let j = currentCase[0]; j < currentCase[1] + 1; j++) {
//             width.push(n[j]);
//         }
//         let currentWidth = Math.min(...width);
//         console.log(currentWidth);
//         // console.log(typeof currentWidth);
//     }
// }
//
// let n = [2, 3, 1, 2, 3, 2, 3, 3]
// let cases = [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]]
// serviceLane(n, cases);

function birthday(s, d, m) {
    let solutions = [];
    for (let i = 0; i < s.length; i++) {
        let tempArr = [];
        let temp = 0;
        for (let j = 0; j < m; j++) {
            temp += s[i + j];
            tempArr.push(s[i + j]);
            if (temp === d) {
                solutions.push(tempArr);
            }
        }
    }
    console.log(solutions);
}

// birthday([ 2, 2, 1, 3, 2 ], 4, 2);
birthday([ 1, 2, 1, 3, 2 ], 3, 2);