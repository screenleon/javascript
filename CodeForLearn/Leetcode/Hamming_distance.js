// Hamming distance

/*
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
*/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    // const xPostiton = x.toString(2).length - x.toString(2).indexOf(1);
    // const yPosition = y.toString(2).length - y.toString(2).indexOf(1);
    // return Math.abs(xPostiton - yPosition);
    return x !== y ? (x ^ y).toString(2).match(/[1]/g).length : 0; 
};

var hammingDistanceReference = function(x, y) {
    let hammDistance = 0;
    const x_b2= Number(x>>>0).toString(2).padStart(32,0);
    const y_b2= Number(y>>>0).toString(2).padStart(32,0);
    
    for(let i=0; i < x_b2.length; i++) {
         if(x_b2[i] !== y_b2[i]){
              hammDistance += 1;
             }
        }
    return hammDistance;
};

// console.log(hammingDistance(1, 4))

const test1X = 1;
const test1Y = 4;
const test2X = 93;
const test2Y = 73;
const test3X = 0;
const test3Y = 0;
const test4X = 0;
const test4Y = 1;
const test5X = 5;
const test5Y = 5;
// console.log((test1 ^ test2).toString(2).match(/[1]/g).length)
// console.log((test1 ^ test2).toString(2).find(Element => Element === 1));
console.log(hammingDistance(test4X, test4Y))
