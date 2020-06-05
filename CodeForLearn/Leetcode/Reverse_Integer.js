// Reverse Integer
/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:
Input: 123
Output: 321

Example 2:
Input: -123
Output: -321

Example 3:
Input: 120
Output: 21

Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let reverseNumber = parseInt(/\d+/.exec(x.toString())[0].split('').reverse().join(''));
    if (x < 0) {
        reverseNumber *= -1;
    }
    if (reverseNumber < Math.pow(2, 31) * -1 || reverseNumber > Math.pow(2, 31) - 1) return 0;
    else return reverseNumber;
}

var reverseReference = function (x) {
    let reversedNumber = 0;
    let temp;
    let isNegative = false;

    if (x < 0) {
        isNegative = true;
        x = Math.abs(x);
    }

    while (x > 0) {
        temp = reversedNumber * 10 + x % 10;
        x = Math.floor(x / 10);
        reversedNumber = temp;
    }

    if (reversedNumber > Math.pow(2, 31) - 1) {
        return 0;
    }
    return isNegative ? -reversedNumber : reversedNumber;
};

console.log(reverse(-123))

console.time('reference');
const test1 = (reverseReference(1534236469))
console.timeEnd('reference');

console.time('own');
const test2 = reverse(1534236469)
console.timeEnd('own');