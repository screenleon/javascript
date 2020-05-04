function scramble(str1, str2) {
    let occurences = str1.split("").reduce((arr, cur) => { arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr; }, {});
    return str2.split("").every((character) => --occurences[character] >= 0);
}

function ownscramble(str1, str2) {
    //code me
    if (str1.length < str2.length) return false;
    let str1Object = {};
    let str2Object = {};

    for (let index = 0; index < str1.length; index++) {
        str1Object.hasOwnProperty([str1[index]]) ? str1Object[str1[index]]++ : str1Object[str1[index]] = 1;
    }
    for (let index = 0; index < str2.length; index++) {
        str2Object.hasOwnProperty([str2[index]]) ? str2Object[str2[index]]++ : str2Object[str2[index]] = 1;
    }
    console.log('str1 object:', str1Object);
    console.log('str2 object:', str2Object);

    for (let str2Element in str2Object) {
        if (!str1Object.hasOwnProperty(str2Element) || str1Object[str2Element] < str2Object[str2Element])
            return false
    }
    return true;
}

console.log(scramble('rkqodlw','world'))
// true
console.log(scramble('katas','steak'))
// false
console.log(scramble('scriptjava','javascript'))
// true
console.log(scramble('jscripts','javascript'))
// false
console.log(scramble('aabbcamaomsccdd','commas'))
// true