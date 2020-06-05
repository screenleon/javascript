// Ransom Note

/*
Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const ransomNoteElements = calculateCharToObject(ransomNote);
    const magazineElements = calculateCharToObject(magazine);
    for (let [key, value] of Object.entries(ransomNoteElements)) {
      if (!magazineElements.hasOwnProperty(key) || ransomNoteElements[key] > magazineElements[key]) return false;
    }
    return true;
  };
  
  function calculateCharToObject(string) {
    let charObject = {};
    const stringArray = string.split('');
    for (let element of stringArray) {
      if (charObject.hasOwnProperty(element)) charObject[element]++;
      else charObject[element] = 1;
    }
    return charObject;
  }
  
  var canConstructReference = function(ransomNote, magazine) {
    let chars = ransomNote.split('');
    let magChars = magazine.split('');
    
    for (let i = 0; i < ransomNote.length; i++) {
        if (magChars.includes(chars[i])) magChars[magChars.indexOf(chars[i])] = '';
        else return false;        
    }
    
    return true;
  };
  
  console.log(canConstruct('a', 'b'));
  console.log(canConstruct('aa', 'ab'));
  console.log(canConstruct('aa', 'aab'));
  
  console.time('canConstruct');
  const test1 = canConstruct("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj");
  console.timeEnd('canConstruct');
  
  console.time('canConstruct Reference');
  const test2 = canConstructReference("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj")
  console.timeEnd('canConstruct Reference');
  
  console.log(test1 === test2);
  