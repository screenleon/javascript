/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Brute Force
// Runtime 104  ms
// Memory  34.5 MB
var twoSum = function (nums, target) {
    for (let index = 0; index < nums.length; index++) {
        for (let secondIndex = index + 1; secondIndex < nums.length; secondIndex++) {
            if (nums[index] + nums[secondIndex] === target) {
                return [index, secondIndex];
            }
        }
    }
};

// Two-pass Hash Table
// more fast but use more memory
// Runtime 60 ms
// Memory  41 MB
var twoSumTwoPassHashTable = function (nums, target) {
    let hashTable = {};
    for (let index = 0; index < nums.length; index++) {
        hashTable[nums[index]] = index;
    }
    for (let index = 0; index < nums.length; index++) {
        let complement = target - nums[index];
        if (hashTable.hasOwnProperty(complement) && hashTable[complement] != index)
            return [index, hashTable[complement]];
    }
};

// One-pass Hash Table
// more fast but use less memory compared to Two-pass Hash Table
// Runtime 48   ms
// Memory  34.5 MB
var twoSumOnePassHashTable = function (nums, target) {
    let hashTable = {};
    for (let index = 0; index < nums.length; index++) {
        let complement = target - nums[index];
        if (hashTable.hasOwnProperty(complement)) {
            return [hashTable[complement], index];
        }
        hashTable[nums[index]] = index;
    }
};

// console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSumTwoPassHashTable([2, 7, 11, 15], 9))
console.log(twoSumOnePassHashTable([2, 7, 11, 15], 9))