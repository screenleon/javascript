const cryptoJs = require('crypto-js');
const fs = require('fs');

const waitEncrypt = fs.readFileSync(process.argv[2]).toString() || '';
// encrypt with date
const encryptData = cryptoJs.AES.encrypt(waitEncrypt, new Date().toLocaleDateString()).toString();

fs.writeFileSync(__dirname + '/data.json', JSON.stringify({ encrypt: encryptData, data: waitEncrypt }));