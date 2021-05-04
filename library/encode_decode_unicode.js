/**
 * Encode word to unicode
 * @param {String} str 
 * @returns {String}
 */
function encodeUnicode(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        res += str.charCodeAt(i).toString(16).padStart(4, '0');
    }
    return res;
}

/**
 * Decode unicode to utf-8
 * @param {String} str
 * @returns {String}
 */
function decodeUnicode(str) {
    let res = [];
    if (str.length % 4 !== 0) {
        str = str.padStart(Math.ceil(str.length / 4) * 4, 0);
    }

    for(let i = 0; i * 4 < str.length; i++) {
        index = i * 4;
        res.push(String.fromCharCode(parseInt(str.slice(index, index + 4), 16)));
    }
    return res.join('');
}
