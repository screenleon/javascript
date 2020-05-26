const fs = require('fs');

const createDirectory = function(directoryPath) {
    directoryPath = __dirname + `/${directoryPath}`;
    const directoryNames = directoryPath.match(/\/[\w.]+/gi);
    let checkDirectoryPath = "";
    while(directoryNames.length > 0){
        checkDirectoryPath += directoryNames.shift();
        if(!fs.existsSync(checkDirectoryPath))fs.mkdirSync(checkDirectoryPath);
    }
    return;
}