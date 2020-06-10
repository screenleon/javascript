// Encrypt this!

/*
Description:
You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter needs to be converted to its ASCII code.
The second letter needs to be switched with the last letter
Keepin' it simple: There are no special characters in input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

var encryptThis = function (text) {
    // Implement me! :)
    let strings = text.split(' ');
    let encryptStrings = [];
    for (let index = 0; index < strings.length; index++) {
      const encode = strings[index].charCodeAt(0).toString();
      const withoutFirstCharString = strings[index].slice(1);
      if (withoutFirstCharString.length > 1)
        encryptStrings.push(encode + withoutFirstCharString.charAt(withoutFirstCharString.length - 1) + withoutFirstCharString.substring(1, withoutFirstCharString.length - 1) + withoutFirstCharString.charAt(0));
      else
        encryptStrings.push(encode + withoutFirstCharString);
    }
    return encryptStrings.join(' ');
  }
  
  console.log(encryptThis('hello world'))