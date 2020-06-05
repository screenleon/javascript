// First Unique Character in a String

/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:
s = "leetcode"
return 0.

s = "loveleetcode",
return 2.

Note: You may assume the string contain only lowercase letters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let duplicateChar = {};
    for (let index = 0; index < s.length; index++) {
      if (duplicateChar.hasOwnProperty(s[index])) continue;
      if (s.match(new RegExp(`[${s[index]}]`, 'g')).length > 1) duplicateChar[s[index]] = true;
      else return index;
    }
    return -1;
  };
  
  var firstUniqCharReference = function (s) {
    let chArr = [];
    let code_a = 'a'.charCodeAt(0);
  
    for (let i = 0; i < 26; i++)
      chArr.push(0);
    for (let i = 0; i < s.length; i++)
      chArr[s.charCodeAt(i) - code_a]++;
    for (let i = 0; i < s.length; i++)
      if (chArr[s.charCodeAt(i) - code_a] == 1) return i;
    return -1;
  };
  
  var firstUniqCharReference2 = function (s) {
    for (let i = 0; i < s.length; i++) {
      let char = s.charAt(i);
      if (s.indexOf(char) === i && s.indexOf(char, i + 1) === -1) return i;
    }
    return -1;
  };
  
  // console.log(firstUniqChar("leetcode"))
  // console.log(firstUniqChar("loveleetcode"))
  // console.log(firstUniqChar("cc"))
  // console.log(firstUniqChar(''));
  
  console.time('Own');
  const test1 = firstUniqChar("loveleetcode");
  console.timeEnd('Own');
  console.time('Reference');
  const test2 = firstUniqCharReference("loveleetcode");
  console.timeEnd('Reference');
  console.time('Reference2');
  const test3 = firstUniqCharReference2("loveleetcode");
  console.timeEnd('Reference2');