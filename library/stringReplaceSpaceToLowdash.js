const replaceSpace = (s) => {
    return s.replace(/[ ]/g, "_");
}

let argv = process.argv[2];
const word = argv || 'Encrypt this!';
console.log(word);
console.log(replaceSpace(word))