// 3. Longest Substring Without Repeating Characters

/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:
Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 

Example 2:
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maxLength = 0;
    let characterObject = {};
    for (let index = 0; index < s.length; index++) {
        characterObject[s[index]] = true;
        for (let stringIndex = index + 1; s[index] !== s[stringIndex] && stringIndex < s.length; stringIndex++) {
            if (!characterObject[s[stringIndex]]) characterObject[s[stringIndex]] = true;
            else break;
        }
        if (maxLength < Object.keys(characterObject).length) maxLength = Object.keys(characterObject).length;
        characterObject = {};
    }
    return maxLength;
};

var lengthOfLongestSubstringReference1 = function (s) {
    let biggest = s.length > 0 ? 1 : 0;
    let currentCount = s.length > 0 ? 1 : 0;
    let end = 1;
    let start = 0;
    let char;
    for (char = 1; char < s.length; char++) {
        let currentString = s.substring(start, end)
        if (currentString.indexOf(s[char]) < 0) {
            currentCount += 1;
        } else {
            currentCount = currentCount - currentString.indexOf(s[char]);
            start = s.indexOf(s[char], start) + 1;
        }
        biggest = biggest < currentCount ? currentCount : biggest;
        end += 1;
    }
    return biggest
};

var lengthOfLongestSubstringReference2 = function (s) {
    let answer = 0;    // max none duplicate character length
    let x = 0;         // use to know duplicate character
    let wordword = "";
    let findindex = 0;
    let i = 1;         // s's index

    s.split("").map(value => {
        findindex = wordword.indexOf(value);
        if (findindex !== -1)
            x = x + findindex + 1;

        wordword = s.substring(x, i);
        i += 1;
        if (answer < wordword.length) {
            answer = wordword.length;
        }
    });
    return answer;
};

console.time('Reference')
const test1 = lengthOfLongestSubstringReference1("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ")
console.timeEnd('Reference')

console.time('Own')
const test2 = lengthOfLongestSubstring("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ")
console.timeEnd('Own')