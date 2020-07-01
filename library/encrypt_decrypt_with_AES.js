const cryptoJS = require('crypto-js');
const fs = require('fs');

function encryptAES(dataPath) {
    const waitEncryptData = fs.readFileSync(dataPath).toString();
    const encryptData = cryptoJS.AES.encrypt(waitEncryptData, new Date().toLocaleDateString()).toString();
    fs.writeFileSync(__dirname + '/data.json', JSON.stringify({ encrypt: encryptData, data: waitEncryptData }));
    return;
}

function decryptAES(data) {
    console.log(cryptoJS.AES.decrypt(data, new Date().toLocaleDateString()).toString(cryptoJS.enc.Utf8));
    return;
}

switch (process.argv[2]) {
    case '-e':
        if (!process.argv[3])
            encryptAES(__dirname + '/data');
        else
            encryptAES(process.argv[3])
        break;
    case '-d':
        fs.existsSync(process.argv[3]) ? decryptAES(fs.readFileSync(process.argv[3]).toString()) : decryptAES(process.argv[3]);
}