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



function compareTriplets(a, b) {
    let aliceScore = 0;
    let bobScore = 0;
    if (a.length === b.length) {
        for (let i = 0; i < a.length; i++) {
            if (a[i] > b[i]) {
                aliceScore += 1;
            }
            if (a[i] < b[i]) {
                bobScore += 1;
            }
        }
        return [aliceScore , bobScore];
    };
}

let  a = [1, 2, 3]
let  b = [3, 2, 1]
console.log(compareTriplets(a , b));